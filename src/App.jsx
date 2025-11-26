import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import WhatsAppButton from "./components/WhatsAppButton";
import UpsellModal from "./components/UpsellModal";
import { products } from "./data/products";

function App() {
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    phone: "",
    deliveryMethod: "Delivery",
    paymentMethod: "Efectivo",
  });

  // estado para el modal de sugerencias
  const [showUpsell, setShowUpsell] = useState(false);

  // productos que vamos a sugerir (bebidas y postres)
  const upsellItems = products.filter(
    (p) => p.category === "Bebidas" || p.category === "Postres"
  );

  const addToCart = (product, { fromUpsell = false } = {}) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });

    // Si es una pizza y NO viene desde el modal, abrimos las sugerencias
    if (product.category === "Pizzas" && !fromUpsell) {
      setShowUpsell(true);
    }
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

  // agregar desde el modal de upsell
  const handleAddFromUpsell = (product) => {
    addToCart(product, { fromUpsell: true });
  };

  return (
    <div className="bg-body-tertiary min-vh-100">
      <Navbar />
      <HeroCarousel />

      <main className="py-5" id="pedido">
        <div className="container-fluid px-4 px-lg-5">
          <div className="row">
            {/* Menú */}
            <div className="col-12 col-lg-7 mb-4 mb-lg-0">
              <Menu onAddToCart={addToCart} />
            </div>

            {/* Carrito + datos + botón WhatsApp */}
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
          © {new Date().getFullYear()} Pizzería Reacta - Hecho con React
          &amp; Bootstrap
        </small>
      </footer>

      {/* Modal de sugerencias */}
      <UpsellModal
        show={showUpsell}
        onClose={() => setShowUpsell(false)}
        upsellItems={upsellItems}
        onAdd={handleAddFromUpsell}
      />
    </div>
  );
}

export default App;
