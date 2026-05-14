export default function ProgramTemplate({
  data,
}) {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "#0f1f3d",
          color: "#ffffff",
          padding:
            "clamp(50px, 8vw, 80px) clamp(20px, 5vw, 60px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize:
                "clamp(0.75rem, 2vw, 0.85rem)",
              fontWeight: 700,
              letterSpacing: "0.08em",
              opacity: 0.8,
              marginBottom: "12px",
            }}
          >
            {data.badge}
          </p>

          <h1
            style={{
              fontSize:
                "clamp(2rem, 6vw, 3.5rem)",
              lineHeight: 1.1,
              marginBottom: "20px",
              maxWidth: "700px",
            }}
          >
            {data.title}
          </h1>

          <p
            style={{
              fontSize:
                "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: 1.7,
              maxWidth: "700px",
              opacity: 0.9,
            }}
          >
            {data.description}
          </p>

          <button
            style={{
              marginTop: "30px",
              background:
                "linear-gradient(135deg,#e8431a,#c73010)",
              color: "#fff",
              border: "none",
              padding:
                "14px 26px",
              borderRadius:
                "999px",
              fontWeight: 700,
              cursor: "pointer",
              fontSize:
                "clamp(0.9rem, 2vw, 1rem)",
              width:
                "fit-content",
              maxWidth: "100%",
            }}
          >
            Solicita información
          </button>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section
        style={{
          padding:
            "clamp(50px, 8vw, 80px) clamp(20px, 5vw, 60px)",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize:
                "clamp(1.7rem, 4vw, 2.4rem)",
              marginBottom:
                "25px",
              color:
                "#0f1f3d",
            }}
          >
            Conoce el programa
          </h2>

          <p
            style={{
              fontSize:
                "clamp(1rem, 2vw, 1.1rem)",
              lineHeight: 1.8,
              color:
                "#4b5563",
              maxWidth:
                "850px",
            }}
          >
            {data.overview}
          </p>

          {data.outcomes && (
            <div style={{ marginTop: 24, maxWidth: "850px" }}>
              <h3 style={{ color: "#0f1f3d", marginBottom: 12 }}>Resultados de aprendizaje</h3>
              <ul style={{ color: "#4b5563", lineHeight: 1.8 }}>
                {data.outcomes.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* INFORMACIÓN CLAVE */}
      <section
        style={{
          background:
            "#f5f7fb",
          padding:
            "clamp(50px, 8vw, 80px) clamp(20px, 5vw, 60px)",
        }}
      >
        <div
          style={{
            maxWidth:
              "1100px",
            margin:
              "0 auto",
          }}
        >
          <h2
            style={{
              fontSize:
                "clamp(1.7rem, 4vw, 2.4rem)",
              marginBottom:
                "30px",
              color:
                "#0f1f3d",
            }}
          >
            Información clave
          </h2>

          <div
            style={{
              display:
                "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap:
                "20px",
            }}
          >
            {data.features.map(
              (
                item
              ) => (
                <div
                  key={
                    item
                  }
                  style={{
                    background:
                      "#ffffff",
                    padding:
                      "22px 24px",
                    borderRadius:
                      "14px",
                    boxShadow:
                      "0 4px 10px rgba(0,0,0,0.05)",
                    fontWeight:
                      600,
                    color:
                      "#0f1f3d",
                    textAlign:
                      "center",
                  }}
                >
                  {
                    item
                  }
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {data.modules && (
        <section style={{ padding: "40px 20px", background: "#ffffff" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.4rem", color: "#0f1f3d", marginBottom: 16 }}>Asignaturas / Módulos destacados</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 12 }}>
              {data.modules.map((m, idx) => (
                <div key={idx} style={{ background: "#f8fafc", padding: 14, borderRadius: 10, color: "#374151" }}>{m}</div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section
        style={{
          padding:
            "clamp(50px, 8vw, 80px) clamp(20px, 5vw, 60px)",
          background:
            "#ffffff",
          textAlign:
            "center",
        }}
      >
        <h2
          style={{
            fontSize:
              "clamp(1.7rem, 4vw, 2.4rem)",
            color:
              "#0f1f3d",
            marginBottom:
              "20px",
          }}
        >
          ¿Quieres saber más?
        </h2>

        <p
          style={{
            color:
              "#4b5563",
            marginBottom:
              "30px",
            fontSize:
              "clamp(1rem, 2vw, 1.1rem)",
          }}
        >
          Nuestro equipo puede ayudarte con toda la información.
        </p>

        <button
          style={{
            background:
              "linear-gradient(135deg,#e8431a,#c73010)",
            color:
              "#fff",
            border:
              "none",
            padding:
              "14px 28px",
            borderRadius:
              "999px",
            fontWeight:
              700,
            cursor:
              "pointer",
            fontSize:
              "clamp(0.9rem, 2vw, 1rem)",
            maxWidth:
              "100%",
          }}
        >
          Hablar con un asesor
        </button>
      </section>
    </>
  );
}