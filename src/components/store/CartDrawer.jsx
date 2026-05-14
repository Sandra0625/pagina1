import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";

export default function CartDrawer({
  cart,
  removeFromCart,
  clearCart,
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price,
    0
  );

  return (
    <aside
      style={{
        background: "#ffffff",
        border:
          "1px solid #e5e7eb",
        borderRadius: "24px",
        padding: "28px",
        boxShadow:
          "0 8px 30px rgba(0,0,0,0.06)",
        position: "sticky",
        top: "100px",
        height: "fit-content",
        maxHeight: "80vh",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          marginBottom: "24px",
          paddingBottom: "18px",
          borderBottom:
            "1px solid #e5e7eb",
        }}
      >
        <h2
          style={{
            margin: 0,
          }}
        >
          🛒 Carrito
        </h2>

        <p
          style={{
            margin:
              "8px 0 0",
            color:
              "#6b7280",
          }}
        >
          {cart.length} programa
          {cart.length !== 1
            ? "s"
            : ""}{" "}
          seleccionado
          {cart.length !== 1
            ? "s"
            : ""}
        </p>
      </div>

      {cart.length === 0 && (
        <div
          style={{
            textAlign:
              "center",
            padding:
              "30px 0",
            color:
              "#6b7280",
          }}
        >
          📚
          <br />
          Tu carrito está vacío
        </div>
      )}

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={
            removeFromCart
          }
        />
      ))}

      {cart.length > 0 && (
        <>
          <div
            style={{
              marginTop:
                "24px",
              paddingTop:
                "20px",
              borderTop:
                "1px solid #e5e7eb",
              display:
                "flex",
              justifyContent:
                "space-between",
            }}
          >
            <span>Total</span>

            <strong>
              {total.toLocaleString()}
              €
            </strong>
          </div>

          <div
            style={{
              marginTop:
                "20px",
            }}
          >
            <CheckoutButton
              cart={cart}
              total={total}
              clearCart={
                clearCart
              }
            />
          </div>
        </>
      )}
    </aside>
  );
}