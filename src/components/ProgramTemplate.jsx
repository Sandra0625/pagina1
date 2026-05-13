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
          padding: "80px 60px",
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
              fontSize: "0.8rem",
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
              fontSize: "3rem",
              lineHeight: 1.1,
              marginBottom: "20px",
              maxWidth: "700px",
            }}
          >
            {data.title}
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
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
              padding: "14px 26px",
              borderRadius: "999px",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: "0.95rem",
            }}
          >
            Solicita información
          </button>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section
        style={{
          padding: "80px 60px",
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
              fontSize: "2rem",
              marginBottom: "25px",
              color: "#0f1f3d",
            }}
          >
            Conoce el programa
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#4b5563",
              maxWidth: "850px",
            }}
          >
            {data.overview}
          </p>
        </div>
      </section>

      {/* INFORMACIÓN CLAVE */}
      <section
        style={{
          background: "#f5f7fb",
          padding: "80px 60px",
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
              fontSize: "2rem",
              marginBottom: "30px",
              color: "#0f1f3d",
            }}
          >
            Información clave
          </h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {data.features.map((item) => (
              <div
                key={item}
                style={{
                  background: "#ffffff",
                  padding: "22px 28px",
                  borderRadius: "14px",
                  boxShadow:
                    "0 4px 10px rgba(0,0,0,0.05)",
                  minWidth: "180px",
                  fontWeight: 600,
                  color: "#0f1f3d",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          padding: "80px 60px",
          background: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#0f1f3d",
            marginBottom: "20px",
          }}
        >
          ¿Quieres saber más?
        </h2>

        <p
          style={{
            color: "#4b5563",
            marginBottom: "30px",
          }}
        >
          Nuestro equipo puede ayudarte con toda la información.
        </p>

        <button
          style={{
            background:
              "linear-gradient(135deg,#e8431a,#c73010)",
            color: "#fff",
            border: "none",
            padding: "14px 28px",
            borderRadius: "999px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Hablar con un asesor
        </button>
      </section>
    </>
  );
}