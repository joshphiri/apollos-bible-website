import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FBF8ED",
          100: "#F6F0D6",
          200: "#EEE1AD",
          300: "#E5D285",
          400: "#DDC35C",
          500: "#D4AF37",
          600: "#B8932A",
          700: "#8C7020",
          800: "#604D16",
          900: "#342A0C",
        },
        navy: {
          DEFAULT: "#1E3A5F",
          50: "#E8EDF3",
          100: "#C6D3E3",
          200: "#9BB0CA",
          300: "#708DB1",
          400: "#456A98",
          500: "#1E3A5F",
          600: "#192F4D",
          700: "#14253B",
          800: "#0F1A29",
          900: "#0A0F17",
        },
        cream: {
          DEFAULT: "#FFFEF7",
          50: "#FFFFFF",
          100: "#FFFEF7",
          200: "#FEFCE8",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
