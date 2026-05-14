import express from "express";
import {
  createOrder,
  getOrders,
} from "../controllers/orderController.js";
import protect from "../middleware/auth.js";

const router = express.Router();

// Proteger creación y listado de pedidos
router.post("/", protect, createOrder);
router.get("/", protect, getOrders);

export default router;