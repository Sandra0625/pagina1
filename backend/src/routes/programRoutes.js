import express from "express";
import Program from "../models/Program.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const programs = await Program.find();
  res.json(programs);
});

export default router;