/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
  daisyui: {
    // themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables

    themes: [
      {
        light: {
          primary: "#ff5733", // Laranja avermelhado
          secondary: "black", // Verde claro
          accent: "#5733ff", // Azul arroxeado
          neutral: "#222222", // Preto acinzentado
          "base-100": "#ffffff", // Branco
          "base-200": "#f5f5f5", // Cinza muito claro
          "base-300": "#e0e0e0", // Cinza claro
          info: "#3abff8", // Azul claro
          success: "#36d399", // Verde
          warning: "#fbbd23", // Amarelo alaranjado
          error: "#f87272", // Vermelho claro
        },
      },
    ],
  },
};
