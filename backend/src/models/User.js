import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  verified: { type: Boolean, default: false },
  verificationCode: String,
  verificationExpires: Date,
}, { timestamps: true });

export default mongoose.model("User", userSchema);
