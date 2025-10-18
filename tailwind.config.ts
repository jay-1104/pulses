import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pulse-ink": "#0b0b0f",
        "pulse-muted": "#6f737b",
      },
      fontFamily: {
        sans: ["var(--font-pulse-sans)", "sans-serif"],
      },
      boxShadow: {
        veil: "0 40px 100px -60px rgba(10, 10, 15, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
