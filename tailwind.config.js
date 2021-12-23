module.exports = {
  content: ['**/*.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      brightness: ['hover', 'focus'],
      colors: {},
      fontFamily: {
        inconsolata: ['Inconsolata', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      fontSize: ['hover', 'focus'],
      backgroundColor: ['even'],
    },
  },
  plugins: [],
}
