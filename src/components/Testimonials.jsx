import { COLORS, FONTS, RADIUS } from "../data/tokens";
import { TESTIMONIALS } from "../data/siteData";

export default function Testimonials() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.badge}>Testimonios</span>
          <h2 style={styles.title}>Lo que dicen nuestros estudiantes</h2>
        </div>

        <div style={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} style={styles.card}>
              <div style={styles.stars}>★★★★★</div>
              <p style={styles.text}>"{t.text}"</p>
              <div style={styles.author}>
                <div style={styles.avatar}>{t.avatar}</div>
                <div>
                  <p style={styles.authorName}>{t.name}</p>
                  <p style={styles.authorProgram}>{t.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 0",
    background: `linear-gradient(160deg, ${COLORS.primary} 0%, #0d2d6e 100%)`,
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 24px",
  },
  header: {
    textAlign: "center",
    marginBottom: "48px",
  },
  badge: {
    display: "inline-block",
    background: "rgba(255,255,255,0.15)",
    color: COLORS.white,
    padding: "6px 16px",
    borderRadius: RADIUS.full,
    fontFamily: FONTS.body,
    fontWeight: 700,
    fontSize: "0.8rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "16px",
  },
  title: {
    fontFamily: FONTS.heading,
    fontWeight: 800,
    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
    color: COLORS.white,
    margin: 0,
    letterSpacing: "-0.03em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: RADIUS.xl,
    padding: "28px",
    backdropFilter: "blur(8px)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  stars: {
    color: "#fbbf24",
    fontSize: "1rem",
    letterSpacing: "2px",
  },
  text: {
    fontFamily: FONTS.body,
    fontSize: "0.95rem",
    color: "rgba(255,255,255,0.85)",
    lineHeight: 1.7,
    margin: 0,
    flex: 1,
    fontStyle: "italic",
  },
  author: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "16px",
  },
  avatar: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${COLORS.accent} 0%, #c73010 100%)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.white,
    fontFamily: FONTS.heading,
    fontWeight: 700,
    fontSize: "0.85rem",
    flexShrink: 0,
  },
  authorName: {
    fontFamily: FONTS.body,
    fontWeight: 700,
    fontSize: "0.9rem",
    color: COLORS.white,
    margin: 0,
  },
  authorProgram: {
    fontFamily: FONTS.body,
    fontSize: "0.8rem",
    color: "rgba(255,255,255,0.55)",
    margin: 0,
  },
};
