import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SITE,
  TOP_LINKS,
  NAV_ITEMS,
} from "../data/siteData";
import { MEGA_MENU } from "../data/headerMegaMenu";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [scrolled, setScrolled] =
    useState(false);

  const [activeMegaMenu, setActiveMegaMenu] =
    useState(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      onScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 99999,
        background: "#ffffff",
        boxShadow: scrolled
          ? "0 4px 24px rgba(0,0,0,0.08)"
          : "none",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          borderBottom:
            "1px solid #e5e7eb",
          fontSize: "0.85rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "8px 24px",
            display: "flex",
            justifyContent:
              "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            {TOP_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  textDecoration:
                    "none",
                  color:
                    "#4b5563",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <span>{SITE.phone}</span>
        </div>
      </div>

      {/* MAIN NAV */}
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            height: "72px",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <Link
            to="/"
            style={{
              fontWeight: 800,
              fontSize: "1.5rem",
              textDecoration: "none",
              color: "#111827",
            }}
          >
            UTAMED
          </Link>

          <nav
            style={{
              display: "flex",
              gap: "28px",
              flex: 1,
            }}
          >
            {NAV_ITEMS.map(
              (item) => {
                const key =
                  item.label.toLowerCase();

                const hasMega =
                  !!MEGA_MENU[
                    key
                  ];

                return (
                  <div
                    key={
                      item.label
                    }
                    onMouseEnter={() =>
                      hasMega &&
                      setActiveMegaMenu(
                        key
                      )
                    }
                    style={{
                      height:
                        "72px",
                      display:
                        "flex",
                      alignItems:
                        "center",
                    }}
                  >
                    <Link
                      to={
                        item.href
                      }
                      style={{
                        color:
                          "#111827",
                        textDecoration:
                          "none",
                        fontWeight: 600,
                      }}
                    >
                      {
                        item.label
                      }
                    </Link>
                  </div>
                );
              }
            )}
          </nav>

          <button
            style={{
              background:
                "#e8431a",
              color: "#fff",
              border: "none",
              padding:
                "12px 24px",
              borderRadius:
                "999px",
              fontWeight: 700,
            }}
          >
            Solicita información
          </button>
        </div>

        {/* MEGA MENU FLOTANTE */}
        {activeMegaMenu && (
          <div
            onMouseEnter={() =>
              setActiveMegaMenu(
                activeMegaMenu
              )
            }
            onMouseLeave={() =>
              setActiveMegaMenu(
                null
              )
            }
            style={{
              position:
                "absolute",
              top: "72px",
              left: 0,
              width: "100%",
              zIndex: 999999,
            }}
          >
            <MegaMenu
              data={
                MEGA_MENU[
                  activeMegaMenu
                ]
              }
            />
          </div>
        )}
      </div>
    </header>
  );
}