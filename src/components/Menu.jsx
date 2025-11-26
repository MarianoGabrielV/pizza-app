// src/components/Menu.jsx
import { pizzas } from "../data/pizzas";

export default function Menu({ onAddToCart }) {
  return (
    <section id="menu" className="py-5 bg-light">
      <div className="container-fluid px-4 px-lg-5">
        <h2 className="mb-4 text-center">Menú de Pizzas</h2>
        <div className="row g-4">
            {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12">
            <div className="card shadow-sm">
              <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-start">
                <div>
                  <h5 className="card-title mb-1">{pizza.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {pizza.category}
                  </h6>
                  <p className="card-text mb-2">
                    {pizza.description}
                  </p>
                </div>
                <div className="text-md-end mt-3 mt-md-0">
                  <div className="fw-bold fs-5 mb-2">${pizza.price}</div>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => onAddToCart(pizza)}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
            </div>
            ))}
            </div>

      </div>
    </section>
  );
}
