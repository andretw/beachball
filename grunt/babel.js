module.exports = {
  options: {
    sourceMap: true,
    modules: 'umd',
    experimental: true
  },
  dist: {
    files: {
      '<%= app.dist %>/migme.js': '<%= app.src %>/migme.js'
    }
  }
}