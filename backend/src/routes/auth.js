import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// Dummy user for demo purposes
const DEMO_USER = {
  id: 1,
  email: "test@bigban.edu",
  name: "Usuario Demo",
  password: "password123",
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email y contraseña requeridos" });
  }

  if (email !== DEMO_USER.email || password !== DEMO_USER.password) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }

  const token = jwt.sign(
    { id: DEMO_USER.id, email: DEMO_USER.email, name: DEMO_USER.name },
    process.env.JWT_SECRET || "secret",
    { expiresIn: "2h" }
  );

  res.json({ token, user: { id: DEMO_USER.id, email: DEMO_USER.email, name: DEMO_USER.name } });
});

router.get("/me", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No autorizado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    res.json({ user: decoded });
  } catch (error) {
    res.status(401).json({ message: "Token inválido" });
  }
});

export default router;
