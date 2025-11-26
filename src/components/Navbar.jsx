// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Pizzería
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarPizzeria"
          aria-controls="navbarPizzeria"
          aria-expanded="false"
          aria-label="Mostrar menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarPizzeria">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Menú
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pedido">
                Mi pedido
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
