import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        panelHeader: "#6c6f72",
        panelBg: "#ffffff",
        subPanelBg: "#f4f5f6",
        inputBg: "#eef1f3",
        textPrimary: "#333333",
        successGreen: "#5cb85c",
        warningOrange: "#f0a030",
        borderGray: "#d9d9d9",
      },
      fontFamily: {
        sans: ['"Open Sans"', '"Segoe UI"', "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        panel: "0 1px 3px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
