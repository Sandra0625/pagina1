import { useState } from "react";
import { FEATURED_PROGRAMS } from "../data/siteData";
import {
  COLORS,
  FONTS,
  RADIUS,
  SHADOWS,
} from "../data/tokens";

function ProgramCard({ program }) {
  const [hovered, setHovered] =
    useState(false);

  return (
    <a
      href={program.href}
      onMouseEnter={() =>
        setHovered(true)
      }
      onMouseLeave={() =>
        setHovered(false)
      }
      style={{
        ...styles.card,
        boxShadow: hovered
          ? SHADOWS.xl
          : SHADOWS.sm,
        transform: hovered
          ? "translateY(-4px)"
          : "none",
      }}
    >
      <span style={styles.icon}>
        {program.icon}
      </span>

      <span
        style={{
          ...styles.category,
          color: program.color,
        }}
      >
        {program.category}
      </span>

      <h3 style={styles.title}>
        {program.title}
      </h3>

      <p style={styles.description}>
        {program.description}
      </p>

      <span
        style={{
          ...styles.link,
          color: program.color,
        }}
      >
        Ver programa →
      </span>
    </a>
  );
}

export default function ProgramsGrid() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>
          Titulaciones más demandadas
        </h2>

        <div style={styles.grid}>
          {FEATURED_PROGRAMS.map(
            (program) => (
              <ProgramCard
                key={program.id}
                program={program}
              />
            )
          )}
        </div>

        <div style={styles.ctaWrap}>
          <a
            href="/oferta-academica"
            style={styles.cta}
          >
            Ver toda la oferta
            académica
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "72px 0",
    background:
      COLORS.offWhite,
  },

  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 20px",
  },

  heading: {
    textAlign: "center",
    fontFamily:
      FONTS.heading,
    fontWeight: 800,
    fontSize:
      "clamp(1.7rem, 4vw, 2.3rem)",
    color:
      COLORS.gray800,
    margin:
      "0 0 48px",
    letterSpacing:
      "-0.03em",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(280px,1fr))",
    gap: "24px",
    marginBottom: "40px",
  },

  card: {
    background:
      COLORS.white,
    borderRadius:
      RADIUS.xl,
    padding: "26px",
    textDecoration:
      "none",
    color: "inherit",
    display: "flex",
    flexDirection:
      "column",
    gap: "12px",
    border: `1px solid ${COLORS.gray100}`,
    transition:
      "all 0.25s ease",
    minHeight: "280px",
  },

  icon: {
    fontSize: "1.8rem",
    lineHeight: 1,
  },

  category: {
    fontWeight: 700,
    fontSize: "0.75rem",
    textTransform:
      "uppercase",
    letterSpacing:
      "0.05em",
    fontFamily:
      FONTS.body,
  },

  title: {
    fontFamily:
      FONTS.heading,
    fontWeight: 700,
    fontSize: "1.15rem",
    color:
      COLORS.gray800,
    margin: 0,
    lineHeight: 1.3,
  },

  description: {
    fontFamily:
      FONTS.body,
    fontSize: "0.92rem",
    color:
      COLORS.gray600,
    margin: 0,
    lineHeight: 1.6,
    flex: 1,
  },

  link: {
    fontWeight: 700,
    fontSize: "0.9rem",
    fontFamily:
      FONTS.body,
  },

  ctaWrap: {
    textAlign: "center",
  },

  cta: {
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
    fontFamily:
      FONTS.body,
    boxShadow:
      SHADOWS.colored,
  },
};