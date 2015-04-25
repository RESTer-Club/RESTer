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
                if (_requestBody) {
                    _requestBody.getDoc().setValue('');
                }
            };

            scope.refreshBodyEditor = function () {
                //Need some time to expand the container prior to refresh the editor
                setTimeout(function () {
                    _requestBody.refresh();
                    _requestBody.focus();
                }, 100);
            };

            _requestBody.on("change", function (cm, change) { // jshint ignore:line
                if (typeof (_requestBody) === 'undefined') {
                    return;
                }

                scope.request.body = _requestBody.getValue();
            });
        }
    };
});