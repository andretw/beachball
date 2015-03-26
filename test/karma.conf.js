// Karma configuration
// Generated on Tue Mar 24 2015 09:47:41 GMT+0800 (SGT)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'mocha', 'chai', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel/browser-polyfill.js',
      // es6 promise
      'node_modules/es5-shim/es5-shim.js',
      'node_modules/es6-shim/es6-shim.js',
      // fetch
      'bower_components/fetch/fetch.js',

      // migme
      'src/**/*.js',

      // tests
      'test/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['browserify'],
      'test/**/*.js': ['browserify']
    },

    // 'babelPreprocessor': {
    //   options: {
    //     sourceMap: "inline",
    //     modules: "umd"
    //   },
    //   filename: function(file) {
    //     return file.originalPath.replace(/\.js$/, ".es5.js");
    //   },
    //   sourceFileName: function(file) {
    //     return file.originalPath;
    //   }
    // },

    browserify: {
      debug: true,
      transform: ['babelify', 'stringify']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'/*, 'SlimerJS'*/],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
