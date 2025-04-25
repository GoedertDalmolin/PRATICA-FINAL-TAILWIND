// tailwind.config.js
module.exports = {
  content: ["./src/pages/tailwind/**/*.{js,ts,jsx,tsx}"],

  corePlugins: {
    preflight: false, // ❌ desativa o reset global
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
