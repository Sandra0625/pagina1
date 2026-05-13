import {
  COLORS,
  FONTS,
  RADIUS,
  SHADOWS,
} from "../data/tokens";
import { SITE } from "../data/siteData";

export default function CTABanner() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>
            ¿Listo para dar el siguiente paso?
          </h2>

          <p style={styles.subtitle}>
            Solicita información sin compromiso.
            Nuestros asesores te ayudarán a
            encontrar la titulación perfecta
            para ti.
          </p>

          <div style={styles.actions}>
            <a
              href="/contacto"
              style={styles.primaryBtn}
            >
              Solicitar información gratuita
            </a>

            <a
              href={SITE.phoneHref}
              style={styles.secondaryBtn}
            >
              📞 {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "64px 0",
    background: COLORS.offWhite,
  },

  container: {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "0 20px",
  },

  content: {
    background: COLORS.white,
    borderRadius: RADIUS.xl,
    padding: "clamp(32px, 5vw, 64px)",
    boxShadow: SHADOWS.xl,
    border: `1px solid ${COLORS.gray100}`,
    textAlign: "center",
  },

  title: {
    fontFamily: FONTS.heading,
    fontWeight: 800,
    fontSize:
      "clamp(1.5rem, 4vw, 2.4rem)",
    color: COLORS.gray800,
    margin: "0 0 16px",
    letterSpacing: "-0.03em",
    lineHeight: 1.2,
  },

  subtitle: {
    fontFamily: FONTS.body,
    fontSize:
      "clamp(0.95rem, 2vw, 1.05rem)",
    color: COLORS.gray600,
    lineHeight: 1.7,
    margin: "0 auto 32px",
    maxWidth: "540px",
  },

  actions: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: `linear-gradient(
      135deg,
      ${COLORS.primary} 0%,
      ${COLORS.primaryLight} 100%
    )`,
    color: COLORS.white,
    padding: "14px 26px",
    borderRadius: RADIUS.full,
    textDecoration: "none",
    fontFamily: FONTS.body,
    fontWeight: 700,
    fontSize: "0.95rem",
    boxShadow: SHADOWS.colored,
    display: "inline-block",
    textAlign: "center",
  },

  secondaryBtn: {
    background: "transparent",
    color: COLORS.primary,
    padding: "14px 26px",
    borderRadius: RADIUS.full,
    textDecoration: "none",
    fontFamily: FONTS.body,
    fontWeight: 700,
    fontSize: "0.95rem",
    border: `2px solid ${COLORS.primary}`,
    display: "inline-block",
    textAlign: "center",
  },
};