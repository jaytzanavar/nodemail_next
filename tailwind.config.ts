import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Damouli Law design system — anchored on the firm's mark:
      // deep petrol-navy scales of justice + warm brass laurel on paper neutrals
      colors: {
        navy: {
          50: "#F1F6F8",
          100: "#E4EDF2",
          200: "#C2D6E0",
          300: "#8FB0C2",
          500: "#3C7593",
          600: "#245F7E",
          700: "#14506F",
          800: "#0B4162", // core brand navy — sampled from the mark
          900: "#0A2C40",
          950: "#07202F",
        },
        brass: {
          50: "#FBF6EC",
          100: "#F4ECDC",
          200: "#E9D9BD",
          300: "#D8BE96",
          400: "#C4A471",
          500: "#B08D5B", // core brass — the laurel wreath
          600: "#9E7C46",
          700: "#8A6A3A",
          900: "#5E4422",
        },
        paper: {
          DEFAULT: "#FAF7F1", // default page surface
          2: "#F3EEE4", // secondary tint band
        },
        stone: {
          100: "#ECE7DC",
          200: "#DED7C8",
          300: "#C7BDA9",
          400: "#A89D86",
          500: "#837A66",
        },
        ink: {
          400: "#8C97A1",
          500: "#6B7783",
          600: "#4D5A65",
          700: "#33414C",
          800: "#1E2A34",
          900: "#131C24",
        },
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      // Warm, low + soft shadow system from the design tokens
      boxShadow: {
        sm: "0 1px 3px rgba(31, 24, 12, 0.08), 0 1px 2px rgba(31, 24, 12, 0.04)",
        md: "0 4px 14px rgba(20, 30, 40, 0.08), 0 2px 4px rgba(20, 30, 40, 0.05)",
        lg: "0 12px 32px rgba(11, 41, 62, 0.12), 0 4px 10px rgba(11, 41, 62, 0.06)",
        xl: "0 28px 60px rgba(7, 32, 47, 0.18), 0 8px 18px rgba(7, 32, 47, 0.08)",
        card: "0 30px 60px -34px rgba(10, 44, 64, 0.5)",
        "card-dark": "0 30px 60px -30px rgba(0, 0, 0, 0.7)",
        focus: "0 0 0 3px rgba(176, 141, 91, 0.35)",
        header: "0 8px 30px -22px rgba(10, 44, 64, 0.4)",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.4, 0, 0.2, 1)",
        lift: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-scrim":
          "linear-gradient(104deg, rgba(7,32,47,0.94) 0%, rgba(7,32,47,0.78) 38%, rgba(7,32,47,0.34) 78%, rgba(7,32,47,0.12) 100%)",
        "brass-rule": "linear-gradient(90deg, #B08D5B, #D8BE96)",
      },
    },
  },
  plugins: [],
};
export default config;
