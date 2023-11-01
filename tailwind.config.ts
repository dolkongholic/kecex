import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      title: "28px",
      subtitle: "20px",
      base: "16px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      primary: "#073E66",
      secondary: "#008EE5",
      secondary_light: "#caedff",
      superdarkgray: "#3e3e3e",
      darkgray: "#999999",
      gray: "#e8e8e8e8",
      lightgray: "#F5F5F5",
    },
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
