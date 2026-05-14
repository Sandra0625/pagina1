import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

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

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const onResize = () => {
      // Use a more common mobile breakpoint (768px)
      setIsMobile(window.innerWidth < 768);
    };

    onResize();

    window.addEventListener(
      "scroll",
      onScroll
    );

    window.addEventListener(
      "resize",
      onResize
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );

      window.removeEventListener(
        "resize",
        onResize
      );
    };
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
      {!isMobile && (
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
              {TOP_LINKS.map(
                (link) => (
                  <Link
                    key={
                      link.label
                    }
                    to={link.href}
                    style={{
                      textDecoration:
                        "none",
                      color:
                        "#4b5563",
                    }}
                  >
                    {
                      link.label
                    }
                  </Link>
                )
              )}
            </div>

            <span>
              {SITE.phone}
            </span>
          </div>
        </div>
      )}

      {/* MAIN NAV */}
      <div
        style={{
          position:
            "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            minHeight: "72px",
            padding: "0 20px",
            display: "flex",
            alignItems:
              "center",
            justifyContent:
              "space-between",
            gap: "20px",
          }}
        >
          {/* LOGO */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems:
                "center",
              gap: "12px",
              textDecoration:
                "none",
              flexShrink: 0,
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                height:
                  isMobile
                    ? "42px"
                    : "52px",
                width: "auto",
              }}
            />

            <span
              style={{
                fontWeight: 800,
                fontSize:
                  isMobile
                    ? "1rem"
                    : "1.35rem",
                color:
                  "#111827",
              }}
            >
              {SITE.name}
            </span>
          </Link>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <>
              <nav
                style={{
                  display: "flex",
                  gap: "28px",
                  flex: 1,
                  marginLeft: "30px",
                  // allow wrapping and horizontal scroll to avoid overflow on narrower screens
                  flexWrap: "wrap",
                  overflowX: "auto",
                }}
              >
                {NAV_ITEMS.map(
                  (
                    item
                  ) => {
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

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Link to={SITE.loginHref} style={{ textDecoration: "none", color: "#0a3d8f", fontWeight: 700 }}>
                  Acceso
                </Link>

                <button
                  style={{
                    background: "#e8431a",
                    color: "#fff",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "999px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Solicita información
                </button>
              </div>
            </>
          )}

          {/* MOBILE BUTTON */}
          {isMobile && (
            <button
              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
              style={{
                background:
                  "transparent",
                border:
                  "none",
                fontSize:
                  "1.8rem",
                cursor:
                  "pointer",
              }}
            >
              ☰
            </button>
          )}
        </div>

        {/* MOBILE MENU */}
        {isMobile &&
          mobileMenuOpen && (
            <div
              style={{
                borderTop:
                  "1px solid #e5e7eb",
                padding:
                  "20px",
                display:
                  "flex",
                flexDirection:
                  "column",
                gap: "16px",
                background:
                  "#ffffff",
              }}
            >
              {NAV_ITEMS.map(
                (
                  item
                ) => (
                  <Link
                    key={
                      item.label
                    }
                    to={
                      item.href
                    }
                    onClick={() =>
                      setMobileMenuOpen(
                        false
                      )
                    }
                    style={{
                      textDecoration:
                        "none",
                      color:
                        "#111827",
                      fontWeight: 600,
                    }}
                  >
                    {
                      item.label
                    }
                  </Link>
                )
              )}
            </div>
          )}

        {/* DESKTOP MEGA MENU */}
        {!isMobile &&
          activeMegaMenu && (
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
                width:
                  "100%",
                zIndex:
                  999999,
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