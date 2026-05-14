export default function CheckoutButton({
  cart,
  total,
  clearCart,
}) {
  const handleCheckout =
    async () => {
      try {
        // Crear sesión de pago en backend (Stripe Checkout)
        const userJson = localStorage.getItem("bigban_user");
        const email = userJson ? JSON.parse(userJson).email : undefined;

        const resp = await fetch("http://localhost:5000/api/payments/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: cart, email }),
        });

        if (!resp.ok) throw new Error("Error creando sesión de pago");

        const { url } = await resp.json();
        if (url) {
          // redirigir al checkout de Stripe
          window.location.href = url;
        } else {
          throw new Error("URL de checkout no recibida");
        }
      } catch (error) {
        console.error(error);

        alert(
          "❌ Error al procesar matrícula"
        );
      }
    };

  return (
    <button
      onClick={
        handleCheckout
      }
      style={{
        width: "100%",
        padding:
          "16px 20px",
        background:
          "linear-gradient(135deg,#0a3d8f,#1456c5)",
        color: "#fff",
        border: "none",
        borderRadius:
          "999px",
        fontWeight: 700,
        cursor:
          "pointer",
      }}
    >
      🎓 Finalizar matrícula

      <div
        style={{
          marginTop: "4px",
          fontSize:
            "0.85rem",
        }}
      >
        Total:{" "}
        {total.toLocaleString()}
        €
      </div>
    </button>
  );
}