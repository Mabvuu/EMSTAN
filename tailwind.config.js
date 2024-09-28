module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // This ensures Tailwind scans your Vue files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Playfair Display', 'serif'], // Set Playfair Display as the default font
      },
    },
  },
  plugins: [],
}
