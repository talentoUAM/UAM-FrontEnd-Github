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
      hostname: "localhost",
      port: "1337",
      pathname: "/uploads/**",
    },
    {
      protocol: "https",
      hostname: "uam-backend-strapi-github-production.up.railway.app",
      pathname: "/uploads/**",
    },
  ],
},

};

module.exports = nextConfig; // Cambiar exportación a CommonJS

