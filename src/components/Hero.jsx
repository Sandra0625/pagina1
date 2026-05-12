import { COLORS, FONTS, RADIUS, SHADOWS } from "../data/tokens";
import { HERO } from "../data/siteData";

export default function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.bgBlob1} />
      <div style={styles.bgBlob2} />
      <div style={styles.bgGrid} />

      <div style={styles.container}>
        {/* Texto */}
        <div style={styles.content}>
          <div style={styles.badge}>
            <span style={styles.badgeDot} />
            {HERO.badge}
          </div>

          <h1 style={styles.title}>
            {HERO.title1}<br />
            <span style={styles.titleAccent}>{HERO.title2}</span>
          </h1>

          <p style={styles.subtitle}>{HERO.subtitle}</p>

          <div style={styles.ctaRow}>
            <a href={HERO.ctaPrimary.href} style={styles.ctaPrimary}>
              {HERO.ctaPrimary.label} →
            </a>
            <a href={HERO.ctaSecondary.href} style={styles.ctaSecondary}>
              {HERO.ctaSecondary.label}
            </a>
          </div>

          <div style={styles.statsRow}>
            {HERO.stats.map((stat, i) => (
              <div key={stat.label} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                <div style={styles.statItem}>
                  <span style={styles.statValue}>{stat.value}</span>
                  <span style={styles.statLabel}>{stat.label}</span>
                </div>
                {i < HERO.stats.length - 1 && <div style={styles.statDivider} />}
              </div>
            ))}
          </div>
        </div>

        {/* Visual derecha */}
        <div style={styles.visual}>
          <div style={styles.visualCard}>
            <div style={styles.visualIcon}>🎓</div>
            <p style={styles.visualTitle}>Tu título oficial</p>
            <p style={styles.visualSub}>Reconocido en toda Europa</p>
            <div style={styles.visualProgress}>
              <div style={styles.progressBar} />
            </div>
          </div>
          <div style={styles.badgeCard1}>
            <span style={{ fontSize: "1.4rem" }}>📱</span>
            <div>
              <p style={styles.badgeTitle}>Estudia desde tu móvil</p>
              <p style={styles.badgeSub}>Sin horarios fijos</p>
            </div>
          </div>
          <div style={styles.badgeCard2}>
            <span style={{ fontSize: "1.4rem" }}>⭐</span>
            <div>
              <p style={styles.badgeTitle}>+15.000 estudiantes</p>
              <p style={styles.badgeSub}>confían en UTAMED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    background: `linear-gradient(160deg, ${COLORS.primary} 0%, #0d2d6e 60%, #1a1a2e 100%)`,
    color: COLORS.white,
    overflow: "hidden",
    padding: "80px 0 100px",
  },
  bgBlob1: {
    position: "absolute",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(232,67,26,0.18) 0%, transparent 70%)",
    top: "-100px",
    right: "-100px",
    pointerEvents: "none",
  },
  bgBlob2: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
    bottom: "-80px",
    left: "10%",
    pointerEvents: "none",
  },
  bgGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
    pointerEvents: "none",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    gap: "64px",
    position: "relative",
    zIndex: 1,
  },
  content: {
    flex: "0 0 55%",
    maxWidth: "600px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: RADIUS.full,
    padding: "6px 16px",
    fontFamily: FONTS.body,
    fontSize: "0.8rem",
    fontWeight: 600,
    letterSpacing: "0.04em",
    marginBottom: "24px",
  },
  badgeDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: COLORS.success,
    boxShadow: "0 0 0 3px rgba(34,197,94,0.25)",
    flexShrink: 0,
  },
  title: {
    fontFamily: FONTS.heading,
    fontSize: "clamp(2rem, 4vw, 3.4rem)",
    fontWeight: 800,
    lineHeight: 1.12,
    margin: "0 0 20px",
    color: COLORS.white,
    letterSpacing: "-0.03em",
  },
  titleAccent: {
    background: "linear-gradient(90deg, #ff8c69 0%, #e8431a 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontFamily: FONTS.body,
    fontSize: "1.1rem",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.75)",
    margin: "0 0 36px",
    maxWidth: "500px",
  },
  ctaRow: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "48px",
  },
  ctaPrimary: {
    background: COLORS.accent,
    color: COLORS.white,
    padding: "14px 28px",
    borderRadius: RADIUS.full,
    textDecoration: "none",
    fontFamily: FONTS.body,
    fontWeight: 700,
    fontSize: "1rem",
    boxShadow: "0 8px 24px rgba(232,67,26,0.4)",
  },
  ctaSecondary: {
    background: "rgba(255,255,255,0.1)",
    color: COLORS.white,
    padding: "14px 28px",
    borderRadius: RADIUS.full,
    textDecoration: "none",
    fontFamily: FONTS.body,
    fontWeight: 600,
    fontSize: "1rem",
    border: "1px solid rgba(255,255,255,0.25)",
  },
  statsRow: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  statValue: {
    fontFamily: FONTS.heading,
    fontWeight: 800,
    fontSize: "1.8rem",
    color: COLORS.white,
    lineHeight: 1,
  },
  statLabel: {
    fontFamily: FONTS.body,
    fontSize: "0.82rem",
    color: "rgba(255,255,255,0.6)",
    fontWeight: 500,
  },
  statDivider: {
    width: "1px",
    height: "36px",
    background: "rgba(255,255,255,0.2)",
  },
  visual: {
    flex: 1,
    position: "relative",
    height: "380px",
    minWidth: "280px",
  },
  visualCard: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: RADIUS.xl,
    padding: "32px",
    backdropFilter: "blur(12px)",
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    textAlign: "center",
  },
  visualIcon: {
    fontSize: "4rem",
    lineHeight: 1,
  },
  visualTitle: {
    fontFamily: FONTS.heading,
    fontWeight: 700,
    fontSize: "1.4rem",
    color: COLORS.white,
    margin: 0,
  },
  visualSub: {
    fontFamily: FONTS.body,
    color: "rgba(255,255,255,0.65)",
    margin: "0 0 16px",
    fontSize: "0.9rem",
  },
  visualProgress: {
    width: "100%",
    height: "8px",
    background: "rgba(255,255,255,0.15)",
    borderRadius: RADIUS.full,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    width: "70%",
    background: "linear-gradient(90deg, #e8431a 0%, #ff8c69 100%)",
    borderRadius: RADIUS.full,
  },
  badgeCard1: {
    position: "absolute",
    top: "24px",
    right: "-20px",
    background: COLORS.white,
    borderRadius: "14px",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    boxShadow: SHADOWS.xl,
    zIndex: 2,
  },
  badgeCard2: {
    position: "absolute",
    bottom: "24px",
    left: "-20px",
    background: COLORS.white,
    borderRadius: "14px",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    boxShadow: SHADOWS.xl,
    zIndex: 2,
  },
  badgeTitle: {
    margin: 0,
    fontWeight: 700,
    fontFamily: FONTS.body,
    color: COLORS.gray800,
    fontSize: "0.85rem",
  },
  badgeSub: {
    margin: 0,
    fontFamily: FONTS.body,
    color: COLORS.gray600,
    fontSize: "0.75rem",
  },
};