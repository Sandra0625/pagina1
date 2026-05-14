import ProductCard from "./ProductCard";
import { STORE_PRODUCTS } from "../../data/storeData";

export default function ProductGrid({
  addToCart,
}) {
  return (
    <section
      style={{
        padding: "90px 0",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "56px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background:
                "rgba(232,67,26,0.1)",
              color: "#e8431a",
              padding:
                "6px 14px",
              borderRadius:
                "999px",
              fontSize:
                "0.8rem",
              fontWeight: 700,
              marginBottom:
                "16px",
            }}
          >
            BIG BAN STORE
          </span>

          <h2
            style={{
              margin: 0,
              fontSize:
                "clamp(2rem,4vw,2.8rem)",
              color: "#111827",
              fontWeight: 800,
            }}
          >
            Tienda Académica
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin:
                "18px auto 0",
              color: "#6b7280",
              lineHeight: 1.7,
              fontSize: "1rem",
            }}
          >
            Elige tu programa
            universitario, añade
            tu matrícula al carrito
            y selecciona el plan de
            pago que mejor se adapte
            a ti.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {STORE_PRODUCTS.map(
            (product) => (
              <ProductCard
                key={
                  product.id
                }
                product={
                  product
                }
                addToCart={
                  addToCart
                }
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}