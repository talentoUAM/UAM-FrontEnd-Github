// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['es', 'en'], // Lista de idiomas soportados
    defaultLocale: 'es',    // Idioma por defecto
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", // Dominio del servidor de desarrollo
        port: "1337",          // Puerto donde corre tu servidor Strapi
        pathname: "/uploads/**", // Ruta específica para las imágenes
      },
    ],
  },
};

module.exports = nextConfig; // Cambiar exportación a CommonJS

