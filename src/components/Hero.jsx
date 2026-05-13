import {
  COLORS,
  FONTS,
  RADIUS,
  SHADOWS,
} from "../data/tokens";
import { HERO } from "../data/siteData";

export default function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.bgBlob1} />
      <div style={styles.bgBlob2} />
      <div style={styles.bgGrid} />

      <div style={styles.container}>
        {/* TEXTO */}
        <div style={styles.content}>
          <div style={styles.badge}>
            <span style={styles.badgeDot} />
            {HERO.badge}
          </div>

          <h1 style={styles.title}>
            {HERO.title1}
            <br />
            <span style={styles.titleAccent}>
              {HERO.title2}
            </span>
          </h1>

          <p style={styles.subtitle}>
            {HERO.subtitle}
          </p>

          <div style={styles.ctaRow}>
            <a
              href={HERO.ctaPrimary.href}
              style={styles.ctaPrimary}
            >
              {HERO.ctaPrimary.label} →
            </a>

            <a
              href={HERO.ctaSecondary.href}
              style={styles.ctaSecondary}
            >
              {HERO.ctaSecondary.label}
            </a>
          </div>

          <div style={styles.statsRow}>
            {HERO.stats.map(
              (stat) => (
                <div
                  key={stat.label}
                  style={
                    styles.statItem
                  }
                >
                  <span
                    style={
                      styles.statValue
                    }
                  >
                    {stat.value}
                  </span>

                  <span
                    style={
                      styles.statLabel
                    }
                  >
                    {stat.label}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* VISUAL */}
        <div style={styles.visual}>
          <div
            style={
              styles.visualCard
            }
          >
            <div
              style={
                styles.visualIcon
              }
            >
              🎓
            </div>

            <p
              style={
                styles.visualTitle
              }
            >
              Tu título oficial
            </p>

            <p
              style={
                styles.visualSub
              }
            >
              Reconocido en toda Europa
            </p>

            <div
              style={
                styles.visualProgress
              }
            >
              <div
                style={
                  styles.progressBar
                }
              />
            </div>
          </div>

          <div
            style={
              styles.badgeCard1
            }
          >
            <span
              style={{
                fontSize:
                  "1.3rem",
              }}
            >
              📱
            </span>

            <div>
              <p
                style={
                  styles.badgeTitle
                }
              >
                Estudia desde tu móvil
              </p>

              <p
                style={
                  styles.badgeSub
                }
              >
                Sin horarios fijos
              </p>
            </div>
          </div>

          <div
            style={
              styles.badgeCard2
            }
          >
            <span
              style={{
                fontSize:
                  "1.3rem",
              }}
            >
              ⭐
            </span>

            <div>
              <p
                style={
                  styles.badgeTitle
                }
              >
                +15.000 estudiantes
              </p>

              <p
                style={
                  styles.badgeSub
                }
              >
                confían en Big Ban
              </p>
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
    background: `linear-gradient(
      160deg,
      ${COLORS.primary} 0%,
      #0d2d6e 60%,
      #1a1a2e 100%
    )`,
    color: COLORS.white,
    overflow: "hidden",
    padding:
      "clamp(60px,8vw,100px) 0",
  },

  bgBlob1: {
    position: "absolute",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(232,67,26,0.18) 0%, transparent 70%)",
    top: "-100px",
    right: "-100px",
  },

  bgBlob2: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
    bottom: "-80px",
    left: "10%",
  },

  bgGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
    backgroundSize:
      "32px 32px",
  },

  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "50px",
    position: "relative",
    zIndex: 1,
  },

  content: {
    flex: "1 1 500px",
    minWidth: "280px",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background:
      "rgba(255,255,255,0.1)",
    border:
      "1px solid rgba(255,255,255,0.2)",
    borderRadius:
      RADIUS.full,
    padding:
      "6px 16px",
    marginBottom:
      "24px",
    fontSize:
      "0.8rem",
  },

  badgeDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background:
      COLORS.success,
  },

  title: {
    fontFamily:
      FONTS.heading,
    fontSize:
      "clamp(2rem,6vw,3.6rem)",
    lineHeight: 1.1,
    fontWeight: 800,
    margin:
      "0 0 20px",
  },

  titleAccent: {
    background:
      "linear-gradient(90deg,#ff8c69 0%,#e8431a 100%)",
    WebkitBackgroundClip:
      "text",
    WebkitTextFillColor:
      "transparent",
  },

  subtitle: {
    fontFamily:
      FONTS.body,
    fontSize:
      "clamp(1rem,2vw,1.1rem)",
    lineHeight: 1.7,
    color:
      "rgba(255,255,255,0.75)",
    margin:
      "0 0 36px",
    maxWidth: "550px",
  },

  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    marginBottom:
      "40px",
  },

  ctaPrimary: {
    background:
      COLORS.accent,
    color: COLORS.white,
    padding:
      "14px 24px",
    borderRadius:
      RADIUS.full,
    textDecoration:
      "none",
    fontWeight: 700,
  },

  ctaSecondary: {
    background:
      "rgba(255,255,255,0.1)",
    color: COLORS.white,
    padding:
      "14px 24px",
    borderRadius:
      RADIUS.full,
    textDecoration:
      "none",
    border:
      "1px solid rgba(255,255,255,0.2)",
  },

  statsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "28px",
  },

  statItem: {
    display: "flex",
    flexDirection:
      "column",
  },

  statValue: {
    fontSize:
      "1.7rem",
    fontWeight: 800,
  },

  statLabel: {
    fontSize:
      "0.85rem",
    color:
      "rgba(255,255,255,0.7)",
  },

  visual: {
    flex: "1 1 400px",
    minWidth: "280px",
    position: "relative",
    minHeight: "340px",
  },

  visualCard: {
    background:
      "rgba(255,255,255,0.08)",
    border:
      "1px solid rgba(255,255,255,0.15)",
    borderRadius:
      RADIUS.xl,
    padding:
      "32px",
    backdropFilter:
      "blur(12px)",
    display: "flex",
    flexDirection:
      "column",
    alignItems:
      "center",
    justifyContent:
      "center",
    textAlign: "center",
    gap: "12px",
    minHeight: "320px",
  },

  visualIcon: {
    fontSize:
      "4rem",
  },

  visualTitle: {
    margin: 0,
    fontWeight: 700,
    fontSize:
      "1.3rem",
  },

  visualSub: {
    margin: 0,
    color:
      "rgba(255,255,255,0.7)",
  },

  visualProgress: {
    width: "100%",
    height: "8px",
    background:
      "rgba(255,255,255,0.15)",
    borderRadius:
      RADIUS.full,
    overflow:
      "hidden",
    marginTop:
      "10px",
  },

  progressBar: {
    width: "70%",
    height: "100%",
    background:
      "linear-gradient(90deg,#e8431a 0%,#ff8c69 100%)",
  },

  badgeCard1: {
    position:
      "absolute",
    top: "-10px",
    right: "-10px",
    background:
      COLORS.white,
    color:
      COLORS.gray800,
    borderRadius:
      "14px",
    padding:
      "12px 14px",
    display: "flex",
    gap: "10px",
    boxShadow:
      SHADOWS.xl,
  },

  badgeCard2: {
    position:
      "absolute",
    bottom: "-10px",
    left: "-10px",
    background:
      COLORS.white,
    color:
      COLORS.gray800,
    borderRadius:
      "14px",
    padding:
      "12px 14px",
    display: "flex",
    gap: "10px",
    boxShadow:
      SHADOWS.xl,
  },

  badgeTitle: {
    margin: 0,
    fontWeight: 700,
    fontSize:
      "0.85rem",
  },

  badgeSub: {
    margin: 0,
    fontSize:
      "0.75rem",
    color:
      COLORS.gray600,
  },
};