import type { Config } from "tailwindcss";
import * as tokens from "./styles/tokens.json";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: tokens.background_color.primary,
        secondary: tokens.background_color.secondary,
      },
      colors: {
        black: tokens.colors.black,
        white: tokens.colors.white,
        orange100: tokens.colors.orange[100],
      },
      fontSize: {
        small: tokens.text.sizes.large,
        medium: tokens.text.sizes.medium,
        large: tokens.text.sizes.small,
      },
    },
  },
  plugins: [],
};
export default config;
