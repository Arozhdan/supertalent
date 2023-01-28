/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e6275d",
        secondary: {
          DEFAULT: "#6369d1",
          light: "#bab7f7",
          lighter: "#ddd9fc",
          'light-2': "#3f294c",
          dark: "#25082f",
        },
        dark: "#14021a",
        body: "#594a68",
      },
    },
  },
  plugins: [],
};
