/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs", "./static/css/*.css"],
  theme: {
    extend: {
      colors: {
        "default-red": "#cc0028",
        "login-btn": "#00CCA4",
      },
    },
  },
  plugins: [],
};
