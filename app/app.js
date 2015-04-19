'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('RESTer', [ // jshint ignore:line
  'ngRoute',
  'RESTer.requester'
]).
config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/requester'
            });
}]);