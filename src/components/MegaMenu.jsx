import { Link } from "react-router-dom";

export default function MegaMenu({
  data,
}) {
  if (!data) return null;

  const firstSection =
    data.sections &&
    Object.values(
      data.sections
    )[0];

  const columns =
    firstSection?.columns || [];

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* LEFT CARD */}
        <div style={styles.leftCard}>
          <h2 style={styles.leftTitle}>
            {
              data.leftCard
                ?.title
            }
          </h2>

          <div
            style={
              styles.leftLinks
            }
          >
            {data.leftCard?.links?.map(
              (
                item,
                i
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
                    key={i}
                    to={
                      href
                    }
                    style={
                      styles.leftLink
                    }
                  >
                    {
                      label
                    }
                  </Link>
                );
              }
            )}
          </div>
        </div>

        {/* COLUMNS */}
        <div style={styles.columns}>
          {columns.map(
            (
              col,
              i
            ) => (
              <div
                key={i}
              >
                <h4
                  style={
                    styles.columnTitle
                  }
                >
                  {
                    col.title
                  }
                </h4>

                <div
                  style={
                    styles.items
                  }
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
                          key={
                            j
                          }
                          to={
                            href
                          }
                          style={
                            styles.itemLink
                          }
                        >
                          {
                            label
                          }
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

const styles = {
  wrapper: {
    background:
      "#ffffff",
    borderTop:
      "1px solid #e5e7eb",
    boxShadow:
      "0 18px 45px rgba(0,0,0,0.12)",
    width: "100%",
    maxHeight:
      "calc(100vh - 72px)",
    overflowY:
      "auto",
  },

  container: {
    maxWidth:
      "1280px",
    margin: "0 auto",
    padding:
      "clamp(20px,4vw,36px)",
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(260px,1fr))",
    gap: "32px",
  },

  leftCard: {
    background:
      "#5bc9b8",
    padding:
      "clamp(20px,3vw,28px)",
    borderRadius:
      "14px",
    minWidth: 0,
  },

  leftTitle: {
    marginTop: 0,
    color:
      "#111827",
    fontSize:
      "clamp(1.1rem,2vw,1.4rem)",
  },

  leftLinks: {
    display: "flex",
    flexDirection:
      "column",
    gap: "14px",
  },

  leftLink: {
    textDecoration:
      "none",
    color:
      "#111827",
    fontWeight: 700,
    lineHeight: 1.4,
  },

  columns: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "28px",
    minWidth: 0,
  },

  columnTitle: {
    color:
      "#111827",
    fontSize:
      "0.95rem",
    marginTop: 0,
    marginBottom:
      "14px",
    lineHeight: 1.4,
  },

  items: {
    display: "flex",
    flexDirection:
      "column",
    gap: "10px",
  },

  itemLink: {
    textDecoration:
      "none",
    color:
      "#4b5563",
    lineHeight: 1.5,
    fontSize:
      "0.95rem",
  },
};
