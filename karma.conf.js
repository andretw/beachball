var isparta = require('isparta')
var istanbul = require('browserify-istanbul')

var argv = require('minimist')(process.argv.slice(2))

var options = {
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['browserify', 'source-map-support', 'mocha', 'chai-as-promised', 'sinon-chai'],

  files: [
    'test/**/*.js'
  ],

  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  preprocessors: {
    'test/**/*.js': ['browserify']
  },

  browserify: {
    debug: true,
    transform: [
    ]
  },

  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['mocha', 'progress'],

  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: ['Chrome' /* , 'Firefox' */ ]
}

if (!argv.coverage || argv.coverage === true) {
  options.browserify.transform.unshift(
    istanbul({
      instrumenter: isparta
    })
  )
  options.reporters.push('coverage')
  options.coverageReporter = {
    dir: 'coverage',
    reporters: [
      { type: 'lcovonly', subdir: '.', file: 'lcov.info' },
      { type: 'text' },
      { type: 'text-summary' }
    ]
  }
} else {
  options.browserify.transform.unshift(
    ['babelify', { stage: 0 } ]
  )
}

module.exports = function (config) {
  config.set(options)
}
