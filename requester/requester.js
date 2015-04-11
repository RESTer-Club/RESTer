'use strict';

var DEFAULT_STATUSTEXT = "STATUS";
var AVAILABLE_METHODS = ['GET', 'POST', 'PUT', 'DELETE'];

angular.module('RESTer.requester', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/requester', {
        templateUrl: 'requester/requester.html',
        controller: 'RequesterController',
        controllerAs: 'vm'
    });
}])

.controller('RequesterController', ["$scope", function($scope) {

    $scope.uri = "http://jsonplaceholder.typicode.com/posts/1";
    $scope.statusText = DEFAULT_STATUSTEXT;
    $scope.methods = AVAILABLE_METHODS;
    $scope.currentMethod = $scope.methods[0];
    $scope.contentType;
    $scope.response;

    $scope.setMethod = function(methodType) {
        if (typeof(methodType) === 'undefined') {
            return;
        }

        $scope.currentMethod = methodType;
    };

    $scope.send = function() {
        if ($scope.uri.length == 0) {
            console.error("uri is not set");
            return;
        }

        var request = $.ajax({
            method: $scope.currentMethod,
            url: $scope.uri
        });

        request.done(function(data, statusText, xhr) {
            if (typeof(xhr) === 'undefined') {
                return;
            }

            var contentType = xhr.getResponseHeader("content-type") || "";

            $scope.contentType = contentType;
            
            $scope.response = data;
//            setStatusText(xhr);
            $scope.$apply();
        });

        request.fail(function(xhr, statusText) {
            if (typeof(xhr) === 'undefined') {
                return;
            }

            codeMirrorUtils.setValue("");
            $("#json-response").jsonViewer("");
//            setStatusText(xhr);
            $scope.$apply();
        });
    };

    //        setStatusText = function (xhr) {
    //            if (typeof (xhr) === 'undefined') {
    //                return;
    //            }
    //
    //            var statusCode = xhr.status || "",
    //                statusText = xhr.statusText || "";
    //
    //            $scope.statusText = statusCode + ": " + statusText;
    //        }

    $scope.reset = function() {
        codeMirrorUtils.setValue("");
        $("#json-response").jsonViewer("");
        $scope.uri = "";
        $scope.statusText = "STATUS";
        $scope.currentMethod = $scope.methods[0];
    };
}]);
