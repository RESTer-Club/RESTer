'use strict';

var DEFAULT_STATUSTEXT = "STATUS";
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

.controller('RequesterController', ["$scope", "Request",
    function ($scope, Request) {

        $scope.uri = "http://jsonplaceholder.typicode.com/posts/1";
        $scope.statusText;
        $scope.statusCode;
        $scope.methods = AVAILABLE_METHODS;
        $scope.currentMethod = $scope.methods[0];
        $scope.contentType;
        $scope.response;
        $scope.responseTime;
        $scope.headers = [];

        $scope.setMethod = function (methodType) {
            if (typeof (methodType) === 'undefined') {
                return;
            }

            $scope.currentMethod = methodType;
        };

        $scope.send = function () {
            if ($scope.uri.length == 0) {
                $scope.response = "";
                console.warn("uri is not set");
                return;
            }

            var requestTime = Date.now();
            var request = Request.execute($scope.uri, $scope.currentMethod, $scope.headers);

            request.done(function (data, statusText, xhr) {
                if (typeof (xhr) === 'undefined') {
                    return;
                }
                $scope.responseTime = (Date.now() - requestTime) + ' ms';

                var contentType = xhr.getResponseHeader("content-type") || "";
                $scope.contentType = contentType;
                $scope.response = xhr.responseText;
                $scope.statusCode = xhr.status || "";
                $scope.statusText = $scope.statusCode + ": " + xhr.statusText || "";
                $scope.$apply();
            });

            request.fail(function (xhr, statusText) {
                if (typeof (xhr) === 'undefined') {
                    return;
                }
                $scope.responseTime = (Date.now() - requestTime) + 'ms';

                $scope.response = "";
                $scope.statusCode = xhr.status || "";
                $scope.statusText = $scope.statusCode + ": " + xhr.statusText || "";
                $scope.$apply();
            });
        };

        $scope.reset = function () {
            $scope.response = "";
            $scope.uri = "";
            $scope.statusText = "STATUS";
            $scope.statusCode = "";
            $scope.responseTime = "";
            $scope.currentMethod = $scope.methods[0];
            if ($scope.isHeaderAreaExpanded) {
                $scope.headers = [{
                    name: "",
                    value: ""
            }];
            } else {
                $scope.headers = []
            }
        };
}]);