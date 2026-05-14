import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  price: Number,
  image: String,
});

export default mongoose.model("Program", programSchema);