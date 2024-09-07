/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./**/*.html`],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#9CA3AF",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        norma: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: " Dana DemiBold",
        morabbaLight: "Morabba Light",
        morabbaMediom: "Morabba Medium",
        morabbaBold: "Morabba Bold",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      spacing: {
        4.5: "1.125rem",
        25: "6.25rem",
        30: "7.25rem",
        50: "12.5rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        "home-mobile": "url('../img/headerBgMobile.webp')",
        "home-desctop": "url('../img/headerBgDesktop.webp')",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant(`child`, `&>*`);
      addVariant(`child-hover`, `&>*:hover`);
    },
  ],
};
