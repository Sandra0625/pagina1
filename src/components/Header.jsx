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
      setIsMobile(
        window.innerWidth < 1024
      );
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

  // Estado de usuario y carrito desde localStorage
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const loadUser = () => {
      try {
        const u = localStorage.getItem("bigban_user");
        setUser(u ? JSON.parse(u) : null);
      } catch (e) {
        console.error("Error cargando usuario desde localStorage:", e);
        setUser(null);
      }
    };

    function loadCart() {
      try {
        const c = localStorage.getItem("bigban_cart");
        const arr = c ? JSON.parse(c) : [];
        setCartCount(Array.isArray(arr) ? arr.length : 0);
      } catch (e) {
        console.error("Error cargando carrito desde localStorage:", e);
        setCartCount(0);
      }
    }

    loadUser();
    loadCart();

    const onStorage = (e) => {
      if (e.key === "bigban_user") loadUser();
      if (e.key === "bigban_cart") loadCart();
    };

    window.addEventListener("storage", onStorage);

    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("bigban_token");
    localStorage.removeItem("bigban_user");
    setUser(null);
    // notify other tabs
    window.dispatchEvent(new Event("storage"));
  };

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
                  display:
                    "flex",
                  gap: "28px",
                  flex: 1,
                  marginLeft:
                    "30px",
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
                <Link to="/tienda" style={{ textDecoration: "none", color: "#0a3d8f", fontWeight: 700 }}>
                  🛒 {cartCount}
                </Link>

                {user ? (
                  <>
                    <Link to="/portal" style={{ textDecoration: "none", color: "#0a3d8f", fontWeight: 700 }}>
                      Hola, {user.name}
                    </Link>
                    <button onClick={handleLogout} style={{ background: "transparent", border: "1px solid #e5e7eb", padding: "8px 12px", borderRadius: 8 }}>
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <>
                    <Link to={SITE.loginHref} style={{ textDecoration: "none", color: "#0a3d8f", fontWeight: 700 }}>
                      Acceso
                    </Link>
                    <Link to="/registro" style={{ textDecoration: "none", color: "#0a3d8f", fontWeight: 700 }}>
                      Registro
                    </Link>
                  </>
                )}

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