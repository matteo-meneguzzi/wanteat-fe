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
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'burgundy': '#841c26',
        'dodger-blue': '#2191fb',
        'celeste': '#c2fff4',
        'rose-red': '#ba274a',
        'tiffany-blue': '#8cdedc',
        'dark-brown': '#571d0c',
        'orange': '#ff4e02'
      },
    },

  },
  plugins: [require("daisyui")],
};

export default config;
