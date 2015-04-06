require.config({
  baseUrl: '.',
  paths: {
    'jquery'        : 'node_modules/jquery/dist/jquery',
    'mocha'         : 'node_modules/mocha/mocha',
    'chai'          : 'node_modules/chai/chai',
  },
//  urlArgs: 'bust=' + (new Date()).getTime()
});
 
define(function(require) {
  var chai = require('chai');
  require('mocha');
  require('jquery');
 
  // Chai
  var should = chai.should();
 
  mocha.setup('bdd');
 
  require([
    'views/main-tests.js',
  ], function(require) {
    mocha.run();
  });
 
});