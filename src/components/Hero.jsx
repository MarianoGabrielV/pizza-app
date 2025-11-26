// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="bg-dark text-light py-5">
        <div className="container-fluid px-4 px-lg-5">
          <div className="row align-items-center g-4">
          <div className="col-12 col-md-6">
            <h1 className="display-5 fw-bold">
              Pizzería 🍕
            </h1>
            <p className="lead">
              Pedí tus pizzas favoritas desde el celular y enviá el pedido por
              WhatsApp en un clic.
            </p>
            <ul className="mb-3">
              <li>Horno a la piedra</li>
              <li>Masa casera</li>
              <li>Promos todos los días</li>
            </ul>
            <a href="#menu" className="btn btn-warning btn-lg">
              Ver menú
            </a>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              src="https://images.pexels.com/photos/4109083/pexels-photo-4109083.jpeg"
              className="img-fluid rounded shadow"
              alt="Pizza"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
