/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary:"#fdf5ea",
        //secondary: "#f0d9a7",
        // secondary: "#ab7418",

        // secondary: "#FCF6F5",
        // primary: "#881719",
        primary: "#990011",
         gold: {
          300: '#f0d48a',
          400: '#e5c46e',
          500: '#d5971c', // Your secondary color
          600: '#c0851a',
          700: '#ab7418',
        },
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"], 
        serif: ['Cormorant Garamond', 'serif'],
        milchella: ['Milchella', 'serif'],
        // display: ['Abril Fatface', 'serif'],
        // sans: ['Lato', 'sans-serif'], // For body text
      // serif: ['Playfair Display', 'serif'], // For headings
        // poppins: ["Ubuntu Sans", "sans-serif" ],  // Fixed: Added quotes
        // play: ["'Poppins'", "sans-serif"]   // Fixed: Corrected Poppins
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
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};