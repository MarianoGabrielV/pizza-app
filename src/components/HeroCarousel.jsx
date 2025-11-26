// src/components/HeroCarousel.jsx

export default function HeroCarousel() {
  return (
    <section className="bg-dark">
      <div className="container-fluid px-0">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg"
                className="d-block w-100"
                alt="Pizza de muzzarella"
                style={{ maxHeight: "520px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h2 className="fw-bold text-shadow">Pizzería Reacta 🍕</h2>
                <p>Pedí tus pizzas favoritas y mandá el pedido por WhatsApp.</p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg"
                className="d-block w-100"
                alt="Pizza especial"
                style={{ maxHeight: "520px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h2 className="fw-bold text-shadow">Horno a la piedra</h2>
                <p>Masa casera, ingredientes frescos, sabor brutal.</p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg"
                className="d-block w-100"
                alt="Porción de pizza"
                style={{ maxHeight: "520px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h2 className="fw-bold text-shadow">Promos todos los días</h2>
                <p>2x1, combos familiares y mucho más.</p>
              </div>
            </div>
          </div>

          {/* Controles */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </section>
  );
}
