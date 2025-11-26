// src/config/clientConfig.js
export const clientConfig = {
  nombre: "Pizzería Don Pepe",          // Nombre del local
  tipo: "pizzeria",                     // pizzeria | hamburgueseria | heladeria | etc.

  whatsapp: "+5491136424020",           // Teléfono del negocio (formato internacional)

  logo: "/images/logopizza.png",    // Ruta dentro de /public (ej: public/images/logo-pizzeria.png)

  colores: {
    primario: "#e63946",
    secundario: "#1d3557",
    textoClaro: "#ffffff",
  },

  hero: {
    titulo: "Las mejores pizzas de la ciudad",
    subtitulo: "Hacé tu pedido online y recibilo calentito en tu casa",
    fondo: "/images/fondopizza.png",   // Imagen de fondo (ponela en /public/images/)
  },
};
