// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    phone: "",
    deliveryMethod: "Delivery",
    paymentMethod: "Efectivo",
  });

  const addToCart = (pizza) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === pizza.id);
      if (existing) {
        return prev.map((item) =>
          item.id === pizza.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...pizza, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const changeQty = (id, newQty) => {
    if (newQty <= 0) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="bg-body-tertiary min-vh-100">
      <Navbar />
        <HeroCarousel />
      <main className="py-5" id="pedido">
          <div className="container-fluid px-4 px-lg-5">
            <div className="row">
            {/* Menú en la izquierda, ocupa más espacio en desktop */}
            <div className="col-12 col-lg-7 mb-4 mb-lg-0">
              <Menu onAddToCart={addToCart} />
            </div>

            {/* Carrito + formulario a la derecha */}
            <div className="col-12 col-lg-5">
              <Cart
                cart={cart}
                total={total}
                onRemove={removeFromCart}
                onChangeQty={changeQty}
              />
              <CheckoutForm
                customer={customer}
                onChange={setCustomer}
              />
              <WhatsAppButton
                cart={cart}
                total={total}
                customer={customer}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <small>
          © {new Date().getFullYear()} Pizzería - Hecho por MaGozItSolutions
        </small>
      </footer>
    </div>
  );
}

export default App;
