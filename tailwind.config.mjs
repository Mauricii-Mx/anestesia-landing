// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        brand: {
          vibrant: '#005BF5', // Primary / CTA
          medium: '#2760C2',   // Accent / Hover
          dark: '#39598F',     // Headings
          gray: '#37455C',      // Text
          light: '#F8FAFC'      // Secondary background
        }
      },
      borderRadius: {
        lg: '16px'
      }
    }
  },
  plugins: []
};
