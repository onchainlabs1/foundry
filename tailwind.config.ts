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
        // Custom brand colors
        navy: "#0B1F3B",
        graphite: "#1F2937",
        "soft-green": "#10B981",
        "light-bg": "#F5F7FA",
      },
    },
  },
  plugins: [],
} satisfies Config;
