'use strict';

var CODE_MIRROR_TEXTAREA_ID = "codemirror";
var CODE_MIRROR_CONTAINER = "#markdown-response";
var JSON_VIEWER_CONTROL = "#json-response";

app.directive('responseBrowser', function () {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'common/directives/response-browser/response-browser-template.html',
        link: function (scope, elem, attrs) {
            var _contentType,
                _value,
                _codeMirror;

            initCodeMirror();

            attrs.$observe("contentType", function (value) {
                if (typeof (value) == 'undefined') {
                    return;
                }
                if (value.indexOf('html') > -1) {
                    //HTML response
                    _contentType = 'html';
                } else if (value.indexOf('json') > -1) {
                    //JSON response
                    _contentType = 'json';
                } else {
                    console.warn("Not Handled");
                }
            });

            attrs.$observe("response", function (value) {
                if (typeof (value) == 'undefined') {
                    return;
                }

                if (_contentType === 'html') {

                    prepareForHtmlResponse();
                    _codeMirror.getDoc().setValue(value);

                } else if (_contentType === 'json') {

                    prepareForJsonResponse();
                    $(JSON_VIEWER_CONTROL).jsonViewer(JSON.parse(value));

                } else {
                    console.error("mode is not supported");
                }
            });

            function prepareForJsonResponse() {
                //Hide CodeMirror and show json viewer
                $(CODE_MIRROR_CONTAINER).addClass('hide');
                $(JSON_VIEWER_CONTROL).removeClass('hide');
            };

            function prepareForHtmlResponse() {
                //Show CodeMirror and hide json viewer
                $(CODE_MIRROR_CONTAINER).removeClass('hide');
                $(JSON_VIEWER_CONTROL).addClass('hide');
            };

            function initCodeMirror() {
                _codeMirror = CodeMirror.fromTextArea(document.getElementById(CODE_MIRROR_TEXTAREA_ID), {
                    mode: "xml",
                    lineWrapping: true,
                    viewportMargin: Infinity,
                    lineNumbers: true,
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    matchBrackets: true,
                    autoCloseBrackets: true
                });
            };

            //hack for correct width of codemirror editor when the content has very long lines
            $(window).resize(function () {
                var correction = $("#main-navbar").width();
                scope.windowWidth = window.innerWidth - correction - 40;
                scope.$apply();
            });

            $(document).ready(function () {
                var correction = $("#main-navbar").width();
                scope.windowWidth = window.innerWidth - correction - 40;
            });
        }
    };
});