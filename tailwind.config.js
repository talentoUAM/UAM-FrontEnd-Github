/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "414px",
      xs: "560px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        roboto: ['var(--font-roboto)', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: "#141414",
        },
        secondary: {
          DEFAULT: "#fff",
          // 100: "#cea39c",
        },
        accent: {
          DEFAULT: "#F58634",
          blue: "#35454E",
        },
        width: {
          'fit': 'fit-content',
        },
        height: {
          'fit': 'fit-content',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
