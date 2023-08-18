import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slider: {
          "0%": {
            transform: "translateX(0px)",
          },
          "100%": {
            transform: "translateX(-1400px)",
          },
        },
      },
      animation: {
        slider: "slider 30s linear infinite",
      },
      colors: {
        active: "#006bb3",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
