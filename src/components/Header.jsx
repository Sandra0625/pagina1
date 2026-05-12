import { useState, useEffect } from "react";
import { SITE, TOP_LINKS, NAV_ITEMS } from "../data/siteData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "#0f1f3d",
      boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
      transition: "box-shadow 0.3s",
    }}>
      <div style={{ background: "#0a1628", color: "#fff", fontSize: "0.78rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "6px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", gap: "20px" }}>
            {TOP_LINKS.map(function(l) {
              return <a key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>{l.label}</a>;
            })}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href={SITE.contactHref} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>✉ Contacto</a>
            <a href={SITE.phoneHref} style={{ color: "#fff", fontWeight: 700, textDecoration: "none" }}>📞 {SITE.phone}</a>
            <a href={SITE.loginHref} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>👤 Acceso usuarios</a>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: "24px", height: "66px" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: "38px", height: "38px", background: "linear-gradient(135deg,#0a3d8f,#e8431a)", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "1.2rem" }}>U</div>
            <span style={{ fontWeight: 800, fontSize: "1.3rem", color: "#ffffff", letterSpacing: "-0.02em" }}>UTAMED</span>
          </a>

          <nav style={{ display: "flex", gap: "2px", flex: 1, flexWrap: "wrap" }}>
            {NAV_ITEMS.map(function(item) {
              return (
                <a key={item.label} href={item.href} style={{ padding: "7px 11px", color: "rgba(255,255,255,0.85)", textDecoration: "none", fontWeight: 600, fontSize: "0.87rem", borderRadius: "7px", whiteSpace: "nowrap" }}>
                  {item.label} ›
                </a>
              );
            })}
          </nav>

          <button style={{ background: "linear-gradient(135deg,#e8431a,#c73010)", color: "#fff", border: "none", padding: "9px 20px", borderRadius: "999px", fontWeight: 700, fontSize: "0.87rem", cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap" }}>
            Solicita información
          </button>

          <button
            style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "#fff", display: "none" }}
            onClick={function() { setMenuOpen(!menuOpen); }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ display: "flex", flexDirection: "column", background: "#0f1f3d", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "12px 24px 24px", gap: "4px" }}>
          {NAV_ITEMS.map(function(item) {
            return <a key={item.label} href={item.href} style={{ padding: "12px 0", color: "#fff", textDecoration: "none", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{item.label}</a>;
          })}
          <a href={SITE.loginHref} style={{ marginTop: "12px", background: "#e8431a", color: "#fff", textAlign: "center", padding: "14px", borderRadius: "12px", textDecoration: "none", fontWeight: 700 }}>Acceso usuarios</a>
        </div>
      )}
    </header>
  );
}