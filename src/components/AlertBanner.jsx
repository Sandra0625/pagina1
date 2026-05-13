import { ALERT_BANNER } from "../data/siteData";

export default function AlertBanner() {
  return (
    <div style={styles.banner}>
      <span style={styles.icon}>
        📢
      </span>

      <span style={styles.text}>
        <strong>
          {ALERT_BANNER.text}
        </strong>{" "}
        — {ALERT_BANNER.sub}
      </span>

      <a
        href={ALERT_BANNER.href}
        style={styles.link}
      >
        Ver más →
      </a>
    </div>
  );
}

const styles = {
  banner: {
    background: "#f5a623",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",
    gap: "12px",
    padding:
      "12px 20px",
    flexWrap: "wrap",
    textAlign: "center",
  },

  icon: {
    fontSize:
      "1.1rem",
    lineHeight: 1,
  },

  text: {
    fontSize:
      "clamp(0.8rem, 2vw, 0.95rem)",
    lineHeight: 1.4,
  },

  link: {
    color: "#000",
    fontWeight: 700,
    textDecoration:
      "underline",
    whiteSpace:
      "nowrap",
    fontSize:
      "clamp(0.8rem, 2vw, 0.95rem)",
  },
};