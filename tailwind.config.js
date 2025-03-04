module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'neon-green': '#00ff00', // Ensures Tailwind recognizes this color
      },
      boxShadow: {
        'neon': '0 0 10px #00ff00',
        'neon-strong': '0 0 15px #00ff00',
      },
      textShadow: {
        'neon': '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00',
      },
    },
  },
  plugins: [],
}
