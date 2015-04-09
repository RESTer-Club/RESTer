'use strict';

angular.module('RESTer.requester', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/requester', {
        templateUrl: 'requester/requester.html',
        controller: 'RequesterController',
        controllerAs: 'vm'
    });
}])

.controller('RequesterController', [ function () {

        this.uri = "http://jsonplaceholder.typicode.com/posts/1";
        this.statusText = "STATUS";
        this.methods = ['GET', 'POST', 'PUT', 'DELETE'];
        this.currentMethod = this.methods[0];
        this.windowWidth = 800;

//        $(window).resize(function () {
//
//            var correction = $("#main-navbar").width();
//            $scope.windowWidth = window.innerWidth - correction - 40;
//            $scope.$apply();
//        });
//
        $(document).ready(function () {

            var correction = $("#main-navbar").width();
            this.windowWidth = window.innerWidth - correction - 40;
        });

        function setMethod(methodType) {
            if (typeof (methodType) === 'undefined') {
                return;
            }

            this.currentMethod = methodType;
        };

//        $scope.send = function () {
//            if ($scope.uri.length == 0) {
//                console.error("uri is not set");
//                return;
//            }
//
//            var request = $.ajax({
//                method: $scope.currentMethod,
//                url: $scope.uri
//            });
//
//            request.done(function (data, statusText, xhr) {
//                if (typeof (xhr) === 'undefined') {
//                    return;
//                }
//
//                var contentType = xhr.getResponseHeader("content-type") || "";
//
//                mainView.setResponse(data, contentType);
//                setStatusText(xhr);
//                $scope.$apply();
//            });
//
//            request.fail(function (xhr, statusText) {
//                if (typeof (xhr) === 'undefined') {
//                    return;
//                }
//
//                codeMirrorUtils.setValue("");
//                $("#json-response").jsonViewer("");
//                setStatusText(xhr);
//                $scope.$apply();
//            });
//        };
//
////        setStatusText = function (xhr) {
////            if (typeof (xhr) === 'undefined') {
////                return;
////            }
////
////            var statusCode = xhr.status || "",
////                statusText = xhr.statusText || "";
////
////            $scope.statusText = statusCode + ": " + statusText;
////        }
//
//        $scope.reset = function () {
//            codeMirrorUtils.setValue("");
//            $("#json-response").jsonViewer("");
//            $scope.uri = "";
//            $scope.statusText = "STATUS";
//            $scope.currentMethod = $scope.methods[0];
//        };
    }]);