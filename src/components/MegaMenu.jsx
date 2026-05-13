import { Link } from "react-router-dom";

export default function MegaMenu({ data }) {
  if (!data) return null;

  // Buscar la primera sección disponible
  const firstSection =
    data.sections &&
    Object.values(data.sections)[0];

  const columns =
    firstSection?.columns || [];

  return (
    <div
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        boxShadow:
          "0 18px 45px rgba(0,0,0,0.12)",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "36px 24px",
          display: "grid",
          gridTemplateColumns:
            "280px 1fr",
          gap: "40px",
        }}
      >
        {/* LEFT CARD */}
        <div
          style={{
            background: "#5bc9b8",
            padding: "28px",
            borderRadius: "14px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#111827",
            }}
          >
            {data.leftCard?.title}
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {data.leftCard?.links?.map(
              (item, i) => {
                const label =
                  typeof item === "string"
                    ? item
                    : item.label;

                const href =
                  typeof item === "string"
                    ? "/"
                    : item.href;

                return (
                  <Link
                    key={i}
                    to={href}
                    style={{
                      textDecoration:
                        "none",
                      color: "#111827",
                      fontWeight: 700,
                    }}
                  >
                    {label}
                  </Link>
                );
              }
            )}
          </div>
        </div>

        {/* COLUMNS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3,1fr)",
            gap: "30px",
          }}
        >
          {columns.map(
            (col, i) => (
              <div key={i}>
                <h4
                  style={{
                    color: "#111827",
                  }}
                >
                  {col.title}
                </h4>

                <div
                  style={{
                    display: "flex",
                    flexDirection:
                      "column",
                    gap: "10px",
                  }}
                >
                  {col.items?.map(
                    (
                      item,
                      j
                    ) => {
                      const label =
                        typeof item ===
                        "string"
                          ? item
                          : item.label;

                      const href =
                        typeof item ===
                        "string"
                          ? "/"
                          : item.href;

                      return (
                        <Link
                          key={j}
                          to={href}
                          style={{
                            textDecoration:
                              "none",
                            color:
                              "#4b5563",
                          }}
                        >
                          {label}
                        </Link>
                      );
                    }
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}