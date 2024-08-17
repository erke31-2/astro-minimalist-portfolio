/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        deepNavy: "#12172B",
        charcoal: "#1A1A1A",
        offWhite: "#E8E8E8",
        oceanBlue: "#007BFF",
        softWhite: "#F5F5F5",
        lightGray: "#BFBFBF",
      },
      gridTemplateColumns: {
        socialLayout: "repeat(auto-fit, minmax(120px, 1fr))",
      },
    },
  },
  plugins: [],
};
