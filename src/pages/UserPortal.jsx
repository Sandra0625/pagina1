import { useState } from "react";

export default function UserPortal() {
  const [method, setMethod] = useState("tarjeta");

  return (
    <section style={{ padding: "60px 24px", maxWidth: "900px", margin: "0 auto" }}>
      <h2>Portal de Usuario</h2>
      <p>Gestiona tus datos, métodos de pago y matrículas.</p>

      <div style={{ marginTop: 20 }}>
        <h3>Métodos de pago</h3>

        <label style={{ display: "block", marginBottom: 8 }}>
          <input type="radio" name="pay" checked={method === "tarjeta"} onChange={() => setMethod("tarjeta")} /> Tarjeta de crédito
        </label>

        <label style={{ display: "block", marginBottom: 8 }}>
          <input type="radio" name="pay" checked={method === "debito"} onChange={() => setMethod("debito")} /> Débito automático
        </label>

        <div style={{ marginTop: 12 }}>
          {method === "tarjeta" ? (
            <div>
              <p>Formulario de tarjeta (placeholder)</p>
              <input placeholder="Número de tarjeta" style={{ width: "100%", padding: 8, marginBottom: 8 }} />
              <input placeholder="MM/AA" style={{ padding: 8, marginRight: 8 }} />
              <input placeholder="CVC" style={{ padding: 8 }} />
            </div>
          ) : (
            <div>
              <p>Formulario de débito automático (placeholder)</p>
              <input placeholder="IBAN" style={{ width: "100%", padding: 8 }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
