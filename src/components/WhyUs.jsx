import {
  COLORS,
  FONTS,
  RADIUS,
  SHADOWS,
} from "../data/tokens";

import {
  WHY_BIG_BAN_UNIVERSITY,
} from "../data/siteData";

export default function WhyUs() {
  return (
    <section style={styles.section}>
      <div style={styles.bgPattern} />

      <div style={styles.container}>
        <div style={styles.inner}>
          <div style={styles.textCol}>
            <span style={styles.badge}>
              ¿Por qué Big Ban University?
            </span>

            <h2 style={styles.title}>
              Una universidad pensada{" "}
              <span
                style={
                  styles.titleAccent
                }
              >
                para ti
              </span>
            </h2>

            <p style={styles.subtitle}>
              Combinamos la
              flexibilidad del
              estudio online con la
              calidad académica de
              los títulos oficiales.
              Tu ritmo, tu futuro.
            </p>

            <a
              href="/utamed"
              style={
                styles.ctaLink
              }
            >
              Conoce Big Ban
              University →
            </a>
          </div>

          <div
            style={
              styles.featuresGrid
            }
          >
            {WHY_BIG_BAN_UNIVERSITY.map(
              (
                item
              ) => (
                <div
                  key={
                    item.title
                  }
                  style={
                    styles.featureCard
                  }
                >
                  <div
                    style={
                      styles.featureIcon
                    }
                  >
                    {
                      item.icon
                    }
                  </div>

                  <div>
                    <h3
                      style={
                        styles.featureTitle
                      }
                    >
                      {
                        item.title
                      }
                    </h3>

                    <p
                      style={
                        styles.featureDesc
                      }
                    >
                      {
                        item.desc
                      }
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    padding:
      "clamp(60px,8vw,96px) 0",
    background:
      COLORS.white,
    overflow: "hidden",
  },

  bgPattern: {
    position: "absolute",
    inset: 0,
    backgroundImage: `linear-gradient(${COLORS.gray100} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.gray100} 1px, transparent 1px)`,
    backgroundSize:
      "40px 40px",
    opacity: 0.5,
    pointerEvents:
      "none",
  },

  container: {
    maxWidth:
      "1280px",
    margin: "0 auto",
    padding:
      "0 24px",
    position:
      "relative",
    zIndex: 1,
  },

  inner: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(320px,1fr))",
    gap: "40px",
    alignItems:
      "start",
  },

  textCol: {
    display: "flex",
    flexDirection:
      "column",
    gap: "20px",
    minWidth: 0,
  },

  badge: {
    display:
      "inline-block",
    background: `${COLORS.accent}15`,
    color:
      COLORS.accent,
    padding:
      "6px 16px",
    borderRadius:
      RADIUS.full,
    fontFamily:
      FONTS.body,
    fontWeight: 700,
    fontSize:
      "0.8rem",
    letterSpacing:
      "0.06em",
    textTransform:
      "uppercase",
    alignSelf:
      "flex-start",
  },

  title: {
    fontFamily:
      FONTS.heading,
    fontWeight: 800,
    fontSize:
      "clamp(2rem,5vw,2.8rem)",
    color:
      COLORS.gray800,
    margin: 0,
    lineHeight: 1.15,
  },

  titleAccent: {
    color:
      COLORS.primary,
  },

  subtitle: {
    fontFamily:
      FONTS.body,
    fontSize:
      "clamp(1rem,2vw,1.1rem)",
    color:
      COLORS.gray600,
    lineHeight: 1.7,
    margin: 0,
  },

  ctaLink: {
    display:
      "inline-block",
    background:
      COLORS.primary,
    color:
      COLORS.white,
    padding:
      "14px 28px",
    borderRadius:
      RADIUS.full,
    textDecoration:
      "none",
    fontWeight: 700,
    boxShadow:
      SHADOWS.colored,
    alignSelf:
      "flex-start",
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(260px,1fr))",
    gap: "20px",
    minWidth: 0,
  },

  featureCard: {
    display: "flex",
    gap: "16px",
    alignItems:
      "flex-start",
    background:
      COLORS.offWhite,
    borderRadius:
      RADIUS.lg,
    padding: "20px",
    border: `1px solid ${COLORS.gray100}`,
    minWidth: 0,
  },

  featureIcon: {
    fontSize:
      "1.8rem",
    flexShrink: 0,
  },

  featureTitle: {
    fontFamily:
      FONTS.heading,
    fontWeight: 700,
    fontSize:
      "0.95rem",
    color:
      COLORS.gray800,
    margin:
      "0 0 6px",
  },

  featureDesc: {
    fontFamily:
      FONTS.body,
    fontSize:
      "0.9rem",
    color:
      COLORS.gray600,
    margin: 0,
    lineHeight: 1.6,
    wordBreak:
      "break-word",
  },
};