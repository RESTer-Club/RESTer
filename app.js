'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('RESTer', [
  'ngRoute',
  'RESTer.requester'
]).
config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('#', {

            })
            .otherwise({
                redirectTo: '/requester'
            });
}]);