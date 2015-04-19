'use strict';

module.exports = function (config) {
    config.set({

        basePath: 'app/',

        files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '../node_modules/jquery/dist/jquery.js',
      '../node_modules/codemirror/lib/codemirror.js',
      '../node_modules/jquery.json-viewer/json-viewer/jquery.json-viewer.js',
      'app.js',
      'common/**/*.js',
      'requester/**/*.js',
      'common/directives/**/*.html'
    ],

        reporters: ['progress', 'html', 'coverage'],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-junit-reporter',
            'karma-jasmine-html-reporter',
            'karma-ng-html2js-preprocessor'
            ],
        preprocessors: {
            'common/directives/**/*.html': ['ng-html2js'],
            '*/**/*.js': ['coverage']
        },
        coverageReporter: {
            dir: 'coverage/',
            reporters: [{
                type: 'lcov',
                subdir: 'report-lcov'
                }]
        }

    });
};