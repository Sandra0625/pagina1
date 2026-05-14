import mongoose from "mongoose";

const orderSchema =
  new mongoose.Schema(
    {
      items: [
        {
          id: Number,
          title: String,
          price: Number,
        },
      ],

      total: {
        type: Number,
        required: true,
      },

        invoicePath: {
          type: String,
        },

      createdAt: {
        type: Date,
        default: Date.now,
      },
    }
  );

export default mongoose.model(
  "Order",
  orderSchema
);