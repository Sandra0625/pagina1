import { ALERT_BANNER } from "../data/siteData";

export default function AlertBanner() {
  return (
    <div style={{
      background: "#f5a623",
      color: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      padding: "10px 24px",
      fontSize: "0.85rem",
      flexWrap: "wrap",
      textAlign: "center",
    }}>
      <span style={{ fontSize: "1.2rem" }}>📢</span>
      <span>
        <strong>{ALERT_BANNER.text}</strong> — {ALERT_BANNER.sub}
      </span>
      <a href={ALERT_BANNER.href} style={{ color: "#000", fontWeight: 700, textDecoration: "underline" }}>
        Ver más →
      </a>
    </div>
  );
}
