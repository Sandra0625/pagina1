export default function ProductCard({
  product,
  addToCart,
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "28px",
        borderRadius: "24px",
        border: "1px solid #e5e7eb",
        boxShadow:
          "0 6px 20px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        height: "100%",
        transition:
          "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      {/* Badge */}
      {product.badge && (
        <span
          style={{
            alignSelf: "flex-start",
            background:
              "rgba(232,67,26,0.12)",
            color: "#e8431a",
            padding:
              "6px 12px",
            borderRadius:
              "999px",
            fontSize:
              "0.75rem",
            fontWeight: 700,
          }}
        >
          {product.badge}
        </span>
      )}

      {/* Icono */}
      <div
        style={{
          fontSize: "2.6rem",
        }}
      >
        {product.image}
      </div>

      {/* Categoría */}
      <span
        style={{
          fontSize: "0.8rem",
          fontWeight: 700,
          color: "#0a3d8f",
          textTransform:
            "uppercase",
          letterSpacing:
            "0.05em",
        }}
      >
        {product.category}
      </span>

      {/* Título */}
      <h3
        style={{
          margin: 0,
          color: "#111827",
          fontSize: "1.2rem",
          lineHeight: 1.3,
        }}
      >
        {product.title}
      </h3>

      {/* Descripción */}
      <p
        style={{
          margin: 0,
          color: "#6b7280",
          lineHeight: 1.6,
          flex: 1,
          fontSize: "0.95rem",
        }}
      >
        {product.description}
      </p>

      {/* Features */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          marginTop: "4px",
        }}
      >
        {product.features?.slice(
          0,
          2
        ).map((feature) => (
          <span
            key={feature}
            style={{
              fontSize:
                "0.85rem",
              color:
                "#374151",
            }}
          >
            ✓ {feature}
          </span>
        ))}
      </div>

      {/* Duración */}
      <div
        style={{
          fontSize: "0.9rem",
          color: "#6b7280",
        }}
      >
        Duración:{" "}
        <strong>
          {product.duration}
        </strong>
      </div>

      {/* Precio */}
      <div
        style={{
          marginTop: "6px",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          {product.price.toLocaleString()}
          €
        </div>

        <div
          style={{
            fontSize: "0.85rem",
            color: "#6b7280",
          }}
        >
          o desde{" "}
          <strong>
            {product.monthly}
          </strong>
        </div>
      </div>

      {/* Botón */}
      <button
        onClick={() =>
          addToCart(product)
        }
        style={{
          marginTop: "12px",
          width: "100%",
          padding: "14px",
          border: "none",
          borderRadius:
            "999px",
          background:
            "#e8431a",
          color: "#ffffff",
          fontWeight: 700,
          fontSize: "0.95rem",
          cursor: "pointer",
        }}
      >
        Añadir al carrito
      </button>
    </div>
  );
}