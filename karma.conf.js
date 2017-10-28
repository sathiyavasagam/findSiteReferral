// Karma configuration
// Generated on Thu Mar 24 2016 00:30:23 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'public/libs/angular/angular.min.js',
      'public/libs/angular-mocks/angular-mocks.js',
      'public/libs/angular-ui-grid/ui-grid.min.js',
      'public/libs/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'public/libs/angular-google-maps/dist/angular-google-maps.min.js',
      'public/libs/angular-route/angular-route.min.js',
      'public/libs/ng-file-upload/ng-file-upload-shim.min.js',
      'public/libs/ng-file-upload/ng-file-upload.min.js',
      'public/js/customerData/module.js',
      'public/js/customerData/gridCtrl.js',
      'public/js/customerData/gridViewService.js',
      'public/js/fileUpload/module.js',
      'public/js/fileUpload/Uploadservice.js',
      'public/js/fileUpload/uploadCtrl.js',
      'public/js/appRoutes.js',
      'public/js/app.js',
      'test/initialTest.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
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
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
