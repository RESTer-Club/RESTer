angular.module('rester', [])
    .controller('httpRequestController', ['$scope',
        function ($scope) {

            $scope.uri = "http://jsonplaceholder.typicode.com/posts/1";
            $scope.statusText = "";
            $scope.methods = ['GET', 'POST', 'PUT', 'DELETE'];
            $scope.currentMethod = $scope.methods[0];
            $scope.windowWidth = 800;

            $(window).resize(function () {

                var correction = $("#main-navbar").width();
                $scope.windowWidth = window.innerWidth - correction - 40;
                $scope.$apply();
            });

            $(document).ready(function () {

                var correction = $("#main-navbar").width();
                $scope.windowWidth = window.innerWidth - correction - 40;
                $scope.$apply();
            });

            $scope.setMethod = function (methodType) {
                if (typeof (methodType) === 'undefined') {
                    return;
                }

                $scope.currentMethod = methodType;
            };

            $scope.send = function () {
                if ($scope.uri.length == 0) {
                    console.error("uri is not set");
                    return;
                }

                var request = $.ajax({
                    method: $scope.currentMethod,
                    url: $scope.uri
                });

                request.done(function (data, statusText, xhr) {
                    if (typeof (xhr) === 'undefined') {
                        return;
                    }

                    var contentType = xhr.getResponseHeader("content-type") || "";

                    mainView.setResponse(data, contentType);
                    setStatusText(xhr);
                    $scope.$apply();
                });

                request.fail(function (xhr, statusText) {
                    if (typeof (xhr) === 'undefined') {
                        return;
                    }

                    codeMirrorUtils.setValue("");
                    setStatusText(xhr);
                    $scope.$apply();
                });
            };

            setStatusText = function (xhr) {
                if (typeof (xhr) === 'undefined') {
                    return;
                }

                var statusCode = xhr.status || "",
                    statusText = xhr.statusText || "";

                $scope.statusText = statusCode + ": " + statusText;
            }

            $scope.reset = function () {
                console.log("test");
            };
    }]);