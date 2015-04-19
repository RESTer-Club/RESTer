'use strict';

var AVAILABLE_METHODS = ['GET', 'POST', 'PUT', 'DELETE'];

angular.module('RESTer.requester', ['ngRoute'])

.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/requester', {
            templateUrl: 'requester/requester.html',
            controller: 'RequesterController',
            controllerAs: 'vm'
        });
}])

.controller('RequesterController', ['$scope', 'Request',
    function ($scope, Request) {

        $scope.methods = AVAILABLE_METHODS;

        //Request
        $scope.request = new RequestModel();
        $scope.request.method = $scope.methods[0];

        //Response
        $scope.response = new ResponseModel();

        $scope.setMethod = function (methodType) {
            if (typeof (methodType) === 'undefined') {
                return;
            }

            $scope.request.method = methodType;
        };

        $scope.send = function () {
            if ($scope.request.uri.length === 0) {
                $scope.response.reset();
                console.warn('uri is not set');
                return;
            }

            var requestTime = Date.now();
            var request = Request.execute($scope.request);

            if (typeof (request) === 'undefined') {
                return;
            }

            request.done(function (data, statusText, xhr) {
                var responseTime = (Date.now() - requestTime) + ' ms';
                $scope.response.set(xhr, responseTime);
                $scope.$apply();
            });

            request.fail(function (xhr) {
                var responseTime = (Date.now() - requestTime) + 'ms';
                $scope.response.set(xhr, responseTime);
                $scope.$apply();
            });
        };

        $scope.reset = function () {
            $scope.response.reset();
            $scope.request.reset($scope.isHeaderAreaExpanded, $scope.methods[0]);
        };
}]);