import { COLORS } from "../data/tokens";
import {
  SITE,
  FOOTER_LINKS,
} from "../data/siteData";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.top}>
          <div style={styles.brand}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>
                U
              </div>

              <span
                style={styles.logoText}
              >
                Big Ban University
              </span>
            </div>

            <p style={styles.tagline}>
              {SITE.description}
            </p>

            <div style={styles.contact}>
              <a
                href={SITE.phoneHref}
                style={
                  styles.contactLink
                }
              >
                📞 {SITE.phone}
              </a>

              <a
                href={SITE.contactHref}
                style={
                  styles.contactLink
                }
              >
                ✉️ Contacto
              </a>
            </div>
          </div>

          {Object.entries(
            FOOTER_LINKS
          ).map(
            ([group, links]) => (
              <div
                key={group}
                style={
                  styles.linkGroup
                }
              >
                <h4
                  style={
                    styles.groupTitle
                  }
                >
                  {group}
                </h4>

                <ul
                  style={
                    styles.linkList
                  }
                >
                  {links.map(
                    (l) => (
                      <li
                        key={
                          l.label
                        }
                      >
                        <a
                          href={
                            l.href
                          }
                          style={
                            styles.link
                          }
                        >
                          {
                            l.label
                          }
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </div>

        <div style={styles.divider} />

        <div style={styles.bottom}>
          <p style={styles.copy}>
            ©{" "}
            {new Date().getFullYear()}{" "}
            Big Ban University —
            Universidad a
            Distancia. Todos los
            derechos reservados.
          </p>

          <div
            style={
              styles.socialLinks
            }
          >
            <a
              href="#"
              style={
                styles.socialBtn
              }
            >
              in
            </a>

            <a
              href="#"
              style={
                styles.socialBtn
              }
            >
              ig
            </a>

            <a
              href="#"
              style={
                styles.socialBtn
              }
            >
              yt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background:
      COLORS.gray800,
    color: COLORS.white,
  },

  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding:
      "clamp(40px, 6vw, 64px) 20px 28px",
  },

  top: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "32px",
    marginBottom: "40px",
  },

  brand: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  },

  logoIcon: {
    width: "36px",
    height: "36px",
    background:
      "linear-gradient(135deg,#0a3d8f 0%,#e8431a 100%)",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",
    color: "#ffffff",
    fontWeight: 800,
    fontSize: "1.1rem",
    flexShrink: 0,
  },

  logoText: {
    fontWeight: 800,
    fontSize:
      "clamp(1rem,2vw,1.3rem)",
    color: "#ffffff",
    letterSpacing:
      "-0.02em",
  },

  tagline: {
    fontSize: "0.9rem",
    color:
      "rgba(255,255,255,0.55)",
    lineHeight: 1.6,
    margin: 0,
    maxWidth: "320px",
  },

  contact: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  contactLink: {
    color:
      "rgba(255,255,255,0.7)",
    textDecoration:
      "none",
    fontSize: "0.9rem",
  },

  linkGroup: {},

  groupTitle: {
    fontWeight: 700,
    fontSize: "0.85rem",
    color: "#ffffff",
    margin: "0 0 14px",
    textTransform:
      "uppercase",
    letterSpacing:
      "0.08em",
  },

  linkList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection:
      "column",
    gap: "10px",
  },

  link: {
    color:
      "rgba(255,255,255,0.55)",
    textDecoration:
      "none",
    fontSize: "0.9rem",
    lineHeight: 1.4,
  },

  divider: {
    height: "1px",
    background:
      "rgba(255,255,255,0.1)",
    marginBottom: "24px",
  },

  bottom: {
    display: "flex",
    justifyContent:
      "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
  },

  copy: {
    fontSize: "0.82rem",
    color:
      "rgba(255,255,255,0.4)",
    margin: 0,
    lineHeight: 1.5,
  },

  socialLinks: {
    display: "flex",
    gap: "8px",
  },

  socialBtn: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    background:
      "rgba(255,255,255,0.08)",
    border:
      "1px solid rgba(255,255,255,0.12)",
    color:
      "rgba(255,255,255,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",
    textDecoration:
      "none",
    fontWeight: 700,
    fontSize: "0.75rem",
    textTransform:
      "uppercase",
  },
};