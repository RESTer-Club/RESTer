'use strict';

app.directive('requestBody', function () {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'common/directives/request-body/request-body-template.html',
        link: function (scope) {

            var _requestBody;

            initRequestBody();

            function initRequestBody() {
                _requestBody = CodeMirror.fromTextArea(document.getElementById('request-body'), {
                    mode: "json",
                    lineWrapping: true,
                    viewportMargin: Infinity,
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    matchBrackets: true,
                    autoCloseBrackets: true
                });
            }

            scope.resetBodyEditor = function () {
                _requestBody.getDoc().setValue('');
            }

            scope.refreshBodyEditor = function () {
                //Need some time to expand the container prior to refresh the editor
                setTimeout(function () {
                    _requestBody.refresh();
                }, 100);
            }

            _requestBody.on("change", function (cm, change) {
                scope.request.body = _requestBody.getValue();
            });

            //            scope.isHeaderAreaExpanded = false;
            //
            //            scope.expandHeaders = function () {
            //                    var headersCount = scope.request.headers.length;
            //                    if (headersCount === 0 && !scope.isHeaderAreaExpanded) {
            //                        //Add empty fields if there are no any
            //                        scope.request.headers.push({
            //                            name: "",
            //                            value: ""
            //                        });
            //                    } else {
            //                        //Remove header if there is only one and empty
            //                        if (scope.request.headers.length === 1) {
            //                            var header = scope.request.headers[0];
            //                            if (header.name.length === 0 && header.value.length === 0 && scope.isHeaderAreaExpanded) {
            //                                scope.request.headers.splice(0, 1);
            //                            }
            //                        }
            //                    }
            //
            //                    scope.isHeaderAreaExpanded = !scope.isHeaderAreaExpanded;
            //                },
            //
            //                scope.addNewHeader = function () {
            //                    scope.request.headers.push({
            //                        name: "",
            //                        value: ""
            //                    });
            //                },
            //
            //                scope.deleteHeader = function (position) {
            //                    if (scope.request.headers.length > 0) {
            //                        if (position > 0 || scope.request.headers.length > 1) {
            //                            scope.request.headers.splice(position, 1);
            //                        } else if (position === 0) {
            //                            var header = scope.request.headers[0];
            //                            header.name = "";
            //                            header.value = "";
            //                        }
            //                    }
            //                }; // jshint ignore:line
        }
    };
});