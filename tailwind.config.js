// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],  // default text
        mono: ['var(--font-roboto)', 'monospace'],     // code, tech look
      },
    },
  },
  plugins: [],
}
