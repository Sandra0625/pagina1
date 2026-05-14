import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import orderRoutes from "./routes/orders.js";
import authRoutes from "./routes/auth.js";
import paymentsRoutes from "./routes/payments.js";
import webhookRoutes from "./routes/webhook.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

// Stripe requires the raw body for webhook signature verification on that endpoint.
// We'll use express.json() for most routes but mount a raw parser for the webhook route later.
app.use(express.json());

app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/payments", paymentsRoutes);
// Mount webhook route with raw body parsing
import bodyParser from "body-parser";

// Mount webhook route with raw body parsing at /webhook
app.use(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  (req, res, next) => {
    req.rawBody = req.body;
    next();
  },
  webhookRoutes
);

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});