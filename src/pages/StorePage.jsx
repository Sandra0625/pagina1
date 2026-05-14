import {
  useState,
  useEffect,
} from "react";

import ProductGrid from "../components/store/ProductGrid";
import PricingPlans from "../components/store/PricingPlans";
import CartDrawer from "../components/store/CartDrawer";

/* Función para cargar carrito desde localStorage */
function loadCartFromStorage() {
  try {
    const savedCart = localStorage.getItem("bigban_cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error("Error cargando carrito:", error);
    localStorage.removeItem("bigban_cart");
  }
  return [];
}

export default function StorePage() {
  const [cart, setCart] = useState(loadCartFromStorage);

  /*
   Guardar carrito automáticamente
  */
  useEffect(() => {
    localStorage.setItem(
      "bigban_cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  /*
   Añadir producto
  */
  const addToCart = (product) => {
    setCart((prev) => [
      ...prev,
      product,
    ]);
  };

  /*
   Eliminar producto
  */
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          item.id !== id
      )
    );
  };

  /*
   Vaciar carrito
  */
  const clearCart = () => {
    setCart([]);
  };

  return (
    <section
      style={{
        background:
          "#f8f9fc",
        minHeight:
          "100vh",
        padding:
          "40px 0 80px",
      }}
    >
      <div
        style={{
          maxWidth:
            "1400px",
          margin:
            "0 auto",
          padding:
            "0 24px",
          display:
            "grid",
          gridTemplateColumns:
            "minmax(0,1fr) 360px",
          gap: "32px",
          alignItems:
            "start",
        }}
      >
        {/* IZQUIERDA */}
        <div>
          <ProductGrid
            addToCart={
              addToCart
            }
          />

          <PricingPlans />
        </div>

        {/* DERECHA */}
        <CartDrawer
          cart={cart}
          removeFromCart={
            removeFromCart
          }
          clearCart={
            clearCart
          }
        />
      </div>
    </section>
  );
}
