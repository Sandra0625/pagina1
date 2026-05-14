import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// POST /login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Email y contraseña requeridos" });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Credenciales incorrectas" });
    if (!user.verified) return res.status(403).json({ message: "Cuenta no verificada" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: "Credenciales incorrectas" });

    const token = jwt.sign({ id: user._id, email: user.email, name: user.name }, process.env.JWT_SECRET || "secret", { expiresIn: "2h" });

    res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en servidor" });
  }
});

// POST /register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: "Nombre, email y contraseña requeridos" });

  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Usuario ya registrado" });

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const passwordHash = await bcrypt.hash(password, 8);

    const expires = new Date(Date.now() + 1000 * 60 * 60); // 1 hora

    const user = new User({ name, email, passwordHash, verified: false, verificationCode: code, verificationExpires: expires });
    await user.save();

    // Intentar enviar email con nodemailer si está disponible, si no hacer console.log
    (async () => {
      try {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
          secure: false,
          auth: process.env.SMTP_USER
            ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
            : undefined,
        });

        if (process.env.SMTP_USER) {
          const html = `
            <div style="font-family: Arial, sans-serif; color: #111;">
              <h2>Verifica tu cuenta en Big Ban University</h2>
              <p>Hola ${name},</p>
              <p>Gracias por registrarte. Usa el siguiente código para verificar tu cuenta:</p>
              <div style="font-size: 22px; font-weight:700; background:#f3f4f6; padding:12px 18px; display:inline-block; border-radius:8px;">${code}</div>
              <p>Este código expira en 1 hora.</p>
              <p>Si no solicitaste esto, ignora este correo.</p>
              <hr />
              <small>Big Ban University</small>
            </div>
          `;

          await transporter.sendMail({
            from: process.env.SMTP_FROM || "no-reply@bigban.edu",
            to: email,
            subject: "Verifica tu cuenta - Big Ban University",
            text: `Tu código de verificación es: ${code}`,
            html,
          });
          console.log("Email de verificación enviado a", email);
          return;
        }
      } catch (e) {
        // nodemailer no está instalado o falla, caemos al console.log
        console.error("Error enviando email de verificación:", e);
      }

      console.log(`Código de verificación para ${email}: ${code}`);
    })();

    res.json({ message: "Registro creado. Revisa tu correo para el código de verificación." });
  } catch (error) {
    console.error("Error en register:", error);
    res.status(500).json({ message: "Error en servidor" });
  }
});

// POST /verify
router.post("/verify", async (req, res) => {
  const { email, code } = req.body;
  if (!email || !code) return res.status(400).json({ message: "Email y código requeridos" });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Usuario no encontrado" });
    if (user.verified) return res.status(400).json({ message: "Usuario ya verificado" });
    if (!user.verificationCode || user.verificationCode !== code) return res.status(400).json({ message: "Código inválido" });
    if (user.verificationExpires && user.verificationExpires < new Date()) return res.status(400).json({ message: "Código expirado" });

    user.verified = true;
    user.verificationCode = undefined;
    user.verificationExpires = undefined;
    await user.save();

    const token = jwt.sign({ id: user._id, email: user.email, name: user.name }, process.env.JWT_SECRET || "secret", { expiresIn: "2h" });

    res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en servidor" });
  }
});

router.get("/me", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) return res.status(401).json({ message: "No autorizado" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    res.json({ user: decoded });
  } catch (error) {
    console.error("Error verificando token:", error);
    res.status(401).json({ message: "Token inválido" });
  }
});

export default router;
