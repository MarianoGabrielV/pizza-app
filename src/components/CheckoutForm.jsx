// src/components/CheckoutForm.jsx
export default function CheckoutForm({ customer, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...customer, [name]: value });
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-secondary text-white">
        Tus datos
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={customer.name}
            onChange={handleChange}
            placeholder="Ej: Mariano"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Dirección (si es delivery)
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={customer.address}
            onChange={handleChange}
            placeholder="Calle, número, barrio"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Teléfono (opcional)
          </label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            placeholder="Ej: 11 1234-5678"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Entrega</label>
          <select
            className="form-select"
            name="deliveryMethod"
            value={customer.deliveryMethod}
            onChange={handleChange}
          >
            <option value="Delivery">Delivery</option>
            <option value="Retiro en local">Retiro en local</option>
          </select>
        </div>
        <div>
          <label className="form-label">Medio de pago</label>
          <select
            className="form-select"
            name="paymentMethod"
            value={customer.paymentMethod}
            onChange={handleChange}
          >
            <option value="Efectivo">Efectivo</option>
            <option value="Transferencia">Transferencia</option>
            <option value="Mercado Pago">Mercado Pago</option>
          </select>
        </div>
      </div>
    </div>
  );
}
