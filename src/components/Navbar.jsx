// src/components/Navbar.jsx
import { useState } from "react";
import { clientConfig } from "../config/clientConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    // Al hacer click en un link, cerramos el menú en mobile
    setIsOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top"
      style={{ backgroundColor: clientConfig.colores.primario }}
    >
      <div className="container">
        {/* Logo + Nombre */}
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="#hero"
          onClick={handleNavClick}
        >
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

        {/* Botón hamburguesa móvil (controlado por React) */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link text-light"
                href="#menu"
                onClick={handleNavClick}
              >
                Menú
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light"
                href="#cart"
                onClick={handleNavClick}
              >
                Mi pedido
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
