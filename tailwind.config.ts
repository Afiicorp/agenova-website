import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0B2A4A", dark: "#071C31" },
        gold: { DEFAULT: "#C49A4A", dark: "#9B7535" },
        ink: "#1F2933",
        muted: "#66727D",
        surface: "#F5F7F8",
        line: "#DDE3E8",
        placeholder: "#E6EAED",
      },
      fontFamily: {
        sans: ["var(--font-plex)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
