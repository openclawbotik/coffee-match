import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#fdf8f3",
          100: "#f9ede0",
          200: "#f2d9bf",
          300: "#e8be94",
          400: "#db9c66",
          500: "#d18242",
          600: "#c26a30",
          700: "#a35628",
          800: "#834623",
          900: "#6a3b21",
          950: "#3d1d0f",
        },
        cream: "#f5f0e8",
        espresso: "#2c1810",
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        body: ["var(--font-source)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
