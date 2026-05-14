import Order from "../models/Order.js";

export const createOrder =
  async (req, res) => {
    try {
      const { items, total } =
        req.body;

      const order =
        await Order.create({
          items,
          total,
        });

      res.status(201).json(
        order
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error al guardar pedido",
      });
    }
  };

export const getOrders =
  async (req, res) => {
    try {
      const orders =
        await Order.find().sort({
          createdAt: -1,
        });

      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error al obtener pedidos",
      });
    }
  };