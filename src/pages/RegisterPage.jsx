import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Error en registro");
      }

      alert("Código de verificación enviado (revisa la consola del servidor si no hay email configurado)");
      setStep(2);
    } catch (error) {
      console.error(error);
      alert("Error al registrarse: " + error.message);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Error en verificación");
      }

      const data = await res.json();
      // guardar token y usuario via AuthContext
      login(data.user, data.token);
      alert("Registro verificado. Bienvenido " + data.user.name);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error en verificación: " + error.message);
    }
  };

  return (
    <section style={{ padding: "60px 24px", maxWidth: "720px", margin: "0 auto" }}>
      <h2>Registro</h2>

      {step === 1 && (
        <form onSubmit={handleRegister} style={{ display: "grid", gap: "12px" }}>
          <label>
            Nombre completo
            <input value={name} onChange={(e) => setName(e.target.value)} required style={{ width: "100%", padding: "10px", marginTop: "6px" }} />
          </label>

          <label>
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required style={{ width: "100%", padding: "10px", marginTop: "6px" }} />
          </label>

          <label>
            Contraseña
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required style={{ width: "100%", padding: "10px", marginTop: "6px" }} />
          </label>

          <button type="submit" style={{ padding: "12px 16px", background: "#0a3d8f", color: "#fff", border: "none", borderRadius: "8px" }}>Registrarse</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleVerify} style={{ display: "grid", gap: "12px" }}>
          <p>Introduce el código enviado a tu correo:</p>
          <input value={code} onChange={(e) => setCode(e.target.value)} required style={{ width: "100%", padding: "10px" }} />
          <button type="submit" style={{ padding: "12px 16px", background: "#0a3d8f", color: "#fff", border: "none", borderRadius: "8px" }}>Verificar</button>
        </form>
      )}
    </section>
  );
}
