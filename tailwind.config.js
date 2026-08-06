/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#effcff",
          100: "#d7f7fd",
          200: "#aeeefb",
          300: "#72e0f7",
          400: "#2fcdef",
          500: "#0fb0d9",
          600: "#0a8fc0",
          700: "#0e6ba3",
          800: "#134b85",
          900: "#0f356b",
          950: "#0a2247",
        },
        gold: {
          400: "#2dd4bf",
          500: "#14b8a6",
        },
      },
      fontFamily: {
        heading: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(10, 28, 51, 0.15)",
        card: "0 4px 20px rgba(10, 28, 51, 0.08)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};