import express from "express";
import Stripe from "stripe";

const router = express.Router();

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { items, email } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "No hay items en el carrito" });
    }

    const line_items = items.map((it) => {
      const price = Number(it.price || it.amount || 0);
      return {
        price_data: {
          currency: "eur",
          product_data: { name: it.title || it.name || "Producto" },
          unit_amount: Math.round(price * 100),
        },
        quantity: it.quantity ? Number(it.quantity) : 1,
      };
    });

    const origin = req.headers.origin || process.env.FRONTEND_URL || "http://localhost:5173";

    if (!stripe) return res.status(500).json({ message: "STRIPE_SECRET_KEY no configurada" });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/tienda`,
      customer_email: email,
      metadata: { items: JSON.stringify(items || []) },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creando sesión de pago" });
  }
});

export default router;
