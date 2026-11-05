/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        "bg-2": "#F8F8F6",
        ink: "#080808",
        muted: "#606060",
        line: "#111111",
        cyan: "#25B8D0",
        yellow: "#FFC83D",
        green: "#00C795",
        pink: "#FF3292",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        hand: ["Caveat", "cursive"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        brut: "4px 4px 0 0 #111111",
        "brut-lg": "8px 8px 0 0 #111111",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(17,17,17,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};
