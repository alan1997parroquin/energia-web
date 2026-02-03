/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": {
          DEFAULT: "#1F4FD8",
          dark: "#153A9B",
          soft: "#EAF0FF",
        },
        "brand-green": {
          DEFAULT: "#2EAD4A",
          dark: "#1E7F35",
          soft: "#E8F7ED",
        },
        warning: {
          DEFAULT: "#F5B301",
          soft: "#FFF4D6",
        },
        ink: {
          DEFAULT: "#0F172A",
          muted: "#475569",
          soft: "#64748B",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F8FAFC",
          border: "#E2E8F0",
        },
      },
    },
  },
  plugins: [],
};
