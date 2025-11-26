// src/components/Navbar.jsx
import { clientConfig } from "../config/clientConfig";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm fixed-top"
      style={{ backgroundColor: clientConfig.colores.primario }}
    >
      <div className="container">
        {/* Logo + Nombre */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#hero">
          {clientConfig.logo && (
            <img
              src={clientConfig.logo}
              alt={clientConfig.nombre}
              style={{
                height: "40px",
                width: "40px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          )}
          <span
            style={{
              color: clientConfig.colores.textoClaro,
              fontWeight: "bold",
            }}
          >
            {clientConfig.nombre}
          </span>
        </a>

        {/* Botón hamburguesa móvil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light" href="#menu">
                Menú
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#cart">
                Mi pedido
              </a>
            </li>
            {/* Sacamos Contacto */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
