// src/components/UpsellModal.jsx

export default function UpsellModal({ show, onClose, upsellItems, onAdd }) {
  if (!show) return null; // si no hay que mostrarlo, no renderiza nada

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">¿Le sumamos algo a tu pedido?</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Cerrar"
            ></button>
          </div>

          <div className="modal-body">
            <p className="small text-muted">
              Ya agregaste una pizza 🍕. Te dejamos algunas sugerencias para acompañar:
            </p>

            {upsellItems.length === 0 ? (
              <p>No hay productos sugeridos.</p>
            ) : (
              <ul className="list-group">
                {upsellItems.slice(0, 4).map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <div className="fw-semibold">{item.name}</div>
                      <small className="text-muted">${item.price}</small>
                    </div>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => onAdd(item)}
                    >
                      Agregar
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Seguir sin agregar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
