'use strict';

// Declare app level module which depends on views, and components
angular.module('RESTer', [
  'ngRoute',
  'RESTer.requester'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .otherwise({
            redirectTo: '/requester'
        });
}]);