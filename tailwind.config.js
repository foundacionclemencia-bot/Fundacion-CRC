/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial CRC (Documento Fundacional, sección 12.1)
        marino: {
          DEFAULT: "#1B2A4A", // Azul marino profundo
          900: "#131F38",
          800: "#1B2A4A",
          700: "#27395E",
        },
        dorado: {
          DEFAULT: "#C9A84C", // Dorado cálido
          light: "#D9BE73",
        },
        arena: "#F5F0EB", // Beige arena
        terracota: {
          DEFAULT: "#B86B4A", // Terracota suave
          dark: "#A15B3D",
        },
        crema: "#FEFCF9", // Blanco cálido
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};
