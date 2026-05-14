import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.warn("MONGO_URI no definido. Saltando conexión a MongoDB.");
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error MongoDB:", error.message);
    console.log("Reintentando conexión a MongoDB en 5 segundos...");
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;