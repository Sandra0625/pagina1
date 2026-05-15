import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SITE } from "../data/siteData";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Error en login");
      }

      const data = await res.json();
      localStorage.setItem("bigban_token", data.token);
      localStorage.setItem("bigban_user", JSON.stringify(data.user));
      alert("Acceso correcto. Bienvenido " + data.user.name);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ padding: "60px 24px", maxWidth: "720px", margin: "0 auto" }}>
      <h2>Acceso a plataformas</h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required style={{ width: "100%", padding: "10px", marginTop: "6px" }} />
        </label>

        <label>
          Contraseña
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required style={{ width: "100%", padding: "10px", marginTop: "6px" }} />
        </label>

        <button type="submit" disabled={loading} style={{ padding: "12px 16px", background: "#0a3d8f", color: "#fff", border: "none", borderRadius: "8px" }}>
          {loading ? "Entrando..." : "Acceder"}
        </button>
      </form>
    </section>
  );
}
