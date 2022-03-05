module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.{js,html,css}'],
  darkMode: false,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'VBSFX': "url('/img/VBSFX.png')",
        'OMG': "url('/img/OMG.png')"
      }
    },
  },
  variants: {
    extends: {},
  },
  plugins: [],
}
