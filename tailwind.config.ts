import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero": "linear-gradient(to bottom, rgba(0,0,0,.4) 5%, rgba(30, 30, 30, 1) 80%), url('/assets/hero-bg.webp')",
        "primary": "var(--primary-color)",
      },
      colors: {
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
        "light-secondary": "var(--light-secondary-color)"
      },
      screens: {
        "xs": "420px"
      }
    },
  },
  plugins: [],
};
export default config;
