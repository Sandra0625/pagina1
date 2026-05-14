import express from "express";
import Stripe from "stripe";
import Order from "../models/Order.js";
import generateInvoice from "../utils/generateInvoice.js";
import fs from "fs";

const router = express.Router();

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

// This route expects the raw body; mount it with express.raw in server.js
router.post("/stripe", async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  try {
    const event = stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Create an order record based on session data (if you passed items via metadata or line items)
      // Here we attempt to read session.amount_total and customer_details
      try {
        const items = session.metadata && session.metadata.items ? JSON.parse(session.metadata.items) : [];
        const total = (session.amount_total || 0) / 100;

        const order = await Order.create({ items, total, createdAt: new Date() });
        console.log("Order created from webhook:", order._id);

        // Generate invoice PDF
        try {
          const customer = session.customer_details || {};
          const invoicePath = await generateInvoice(order, { name: customer.name, email: customer.email });
          order.invoicePath = invoicePath;
          await order.save();
          console.log("Invoice generated:", invoicePath);

          // Try sending email with attachment if SMTP configured
          if (process.env.SMTP_USER) {
            try {
              const nodemailer = await import("nodemailer");
              const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
                secure: false,
                auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
              });

              const to = customer.email || session.customer_email || undefined;
              if (to) {
                await transporter.sendMail({
                  from: process.env.SMTP_FROM || "no-reply@bigban.edu",
                  to,
                  subject: `Tu factura - Pedido ${order._id}`,
                  text: `Adjuntamos la factura por tu compra. Total: $ ${Number(order.total).toFixed(2)}`,
                  attachments: [
                    { filename: `invoice-${order._id}.pdf`, path: invoicePath },
                  ],
                });
                console.log("Invoice email sent to", to);
              }
            } catch (mailErr) {
              console.error("Error sending invoice email:", mailErr);
            }
          } else {
            console.log("SMTP not configured. Invoice saved at:", invoicePath);
          }
        } catch (invErr) {
          console.error("Error generating/sending invoice:", invErr);
        }
      } catch (e) {
        console.error("Error creating order from webhook", e);
      }
    }

    res.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

export default router;
