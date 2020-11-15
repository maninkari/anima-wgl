module.exports = {
  theme: {
    extend: {
      colors: {
        green: {
          default: '#59981A',
          yellow: '#ECF87F',
          lime: '#81B622',
          olive: '#3D550C'
        }
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // enable remove unused CSS only in production
    // enabled: process.env.NODE_ENV === 'production',
    enabled: false,
    // any file that may contain the reference of CSS styles by class name.
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
