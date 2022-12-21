/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "phone-xs": "320",

      phone: "600px",

      "tab-port-sm": "768px",

      "tab-port": "900px",

      "tab-land": "1200px",

      "big-desktop": "1800px",
    },
    extend: {},
  },
  plugins: [],
};
