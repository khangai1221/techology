/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        "deep-purple": "#4C1D95",
        "dark-gray": "#1F2937",
        "neon-purple": "#8B5CF6",
        "pure-black": "#000000",
        "dark-bg": "#0F0F0F",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": {
            boxShadow: "0 0 5px #8B5CF6, 0 0 10px #8B5CF6, 0 0 15px #8B5CF6",
          },
          "100%": {
            boxShadow: "0 0 10px #8B5CF6, 0 0 20px #8B5CF6, 0 0 30px #8B5CF6",
          },
        },
        "pulse-glow": {
          "0%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
