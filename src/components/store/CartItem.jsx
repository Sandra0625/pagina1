export default function CartItem({
  item,
  removeFromCart,
}) {
  return (
    <div
      style={{
        padding: "18px 0",
        borderBottom:
          "1px solid #e5e7eb",
        display: "flex",
        gap: "14px",
        alignItems: "flex-start",
      }}
    >
      {/* Icono */}
      <div
        style={{
          fontSize: "1.8rem",
          flexShrink: 0,
        }}
      >
        {item.image}
      </div>

      {/* Info */}
      <div
        style={{
          flex: 1,
        }}
      >
        <p
          style={{
            margin: "0 0 4px",
            fontSize: "0.75rem",
            color: "#0a3d8f",
            fontWeight: 700,
            textTransform:
              "uppercase",
          }}
        >
          {item.category}
        </p>

        <h4
          style={{
            margin: "0 0 6px",
            color: "#111827",
            fontSize: "0.95rem",
            lineHeight: 1.4,
          }}
        >
          {item.title}
        </h4>

        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            color: "#6b7280",
          }}
        >
          {item.duration}
        </p>

        <strong
          style={{
            display: "block",
            marginTop: "8px",
            color: "#111827",
            fontSize: "1rem",
          }}
        >
          {item.price.toLocaleString()}€
        </strong>
      </div>

      {/* Eliminar */}
      <button
        onClick={() =>
          removeFromCart(
            item.id
          )
        }
        style={{
          background:
            "transparent",
          border: "none",
          color: "#e8431a",
          fontSize: "1.1rem",
          cursor: "pointer",
          padding: 0,
        }}
      >
        ✕
      </button>
    </div>
  );
}