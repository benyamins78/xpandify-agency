import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        xpandify: {
          green: "#1f493d",
          gold: "#D4AF37",
          white: "#ffffff",
        }
      }
    },
  },
  plugins: [],
};
export default config;
