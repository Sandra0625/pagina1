import { useState } from "react";
import { FEATURED_PROGRAMS } from "../data/siteData";

function ProgramCard(props) {
  const program = props.program;
  const [hovered, setHovered] = useState(false);
  return (
    <a href={program.href}
      style={{
        background: "#ffffff",
        borderRadius: "32px",
        padding: "28px",
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        border: "1px solid #e2e8f0",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.13)" : "0 1px 3px rgba(0,0,0,0.08)",
        transform: hovered ? "translateY(-4px)" : "none",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={function() { setHovered(true); }}
      onMouseLeave={function() { setHovered(false); }}
    >
      <span style={{ fontSize: "1.6rem" }}>{program.icon}</span>
      <span style={{ fontWeight: 700, fontSize: "0.72rem", color: program.color }}>
        {program.category}
      </span>
      <h3 style={{ fontWeight: 700, fontSize: "1.15rem", color: "#1e293b", margin: 0 }}>
        {program.title}
      </h3>
      <p style={{ fontSize: "0.9rem", color: "#475569", margin: 0, lineHeight: 1.6, flex: 1 }}>
        {program.description}
      </p>
      <span style={{ fontWeight: 700, fontSize: "0.88rem", color: program.color }}>
        Ver programa
      </span>
    </a>
  );
}

export default function ProgramsGrid() {
  return (
    <section style={{ padding: "96px 0", background: "#f8f9fc" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{ textAlign: "center", fontWeight: 800, fontSize: "2rem", color: "#1e293b", marginBottom: "48px" }}>
          Titulaciones mas demandadas
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px", marginBottom: "48px" }}>
          {FEATURED_PROGRAMS.map(function(program) {
            return <ProgramCard key={program.id} program={program} />;
          })}
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="/oferta-academica" style={{ display: "inline-block", background: "#0a3d8f", color: "#ffffff", padding: "14px 32px", borderRadius: "9999px", textDecoration: "none", fontWeight: 700 }}>
            Ver toda la oferta academica
          </a>
        </div>
      </div>
    </section>
  );
}
