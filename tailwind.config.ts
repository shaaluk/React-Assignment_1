import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#E5DFD9",
        darkGray: "#141414",
        lightGray: "#E5DFD9",
        darkGreen: "#2FC14F",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        comme: ['"Comme"', "sans-serif"],
        encode: ['"Encode Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
