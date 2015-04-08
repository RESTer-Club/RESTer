angular.module('rester', [])
    .controller('httpRequestController', ['$scope',
        function ($scope) {

            $scope.uri = "http://google.com";
            $scope.statusText = "";
            $scope.methods = ['GET', 'POST', 'PUT', 'DELETE'];
            $scope.currentMethod = $scope.methods[0];
            $scope.windowWidth = 800;

            $(window).resize(function () {

                $scope.windowWidth = window.innerWidth - 230;
                $scope.$apply();
            });

            $(document).ready(function () {

                $scope.windowWidth = window.innerWidth - 230;
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
                    $scope.response = "ERROR";
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

                    $scope.response = "ERROR";
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