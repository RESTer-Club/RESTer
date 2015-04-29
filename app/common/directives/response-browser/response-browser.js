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
                _codeMirror;

            initCodeMirror();

            attrs.$observe("contentType", function (value) {
                if (typeof (value) === 'undefined') {
                    return;
                }

                if (value.length === 0) {
                    return;
                }

                if (value.indexOf('html') > -1) {
                    _contentType = 'html';
                } else if (value.indexOf('xml') > -1) {
                    _contentType = 'html';
                } else if (value.indexOf('json') > -1) {
                    _contentType = 'json';
                } else {
                    _contentType = 'html';
                    console.warn("Not Handled");
                }
            });

            attrs.$observe("response", function (value) {
                if (typeof (value) === 'undefined') {
                    return;
                }

                if (value.length === 0) {
                    hide();
                    return;
                }

                if (_contentType === 'html') {

                    prepareForHtmlResponse();
                    _codeMirror.getDoc().setValue(value);

                } else if (_contentType === 'json') {

                    prepareForJsonResponse();
                    var securedValue = value.replace(/</g, "&lt;").replace(/>/g, "&gt;");;
                    $(JSON_VIEWER_CONTROL).jsonViewer(jQuery.parseJSON(securedValue));

                } else {
                    console.error("mode is not supported");
                }
            });

            function prepareForJsonResponse() {
                //Hide CodeMirror and show json viewer
                $(CODE_MIRROR_CONTAINER).addClass('hide');
                $(JSON_VIEWER_CONTROL).removeClass('hide');
            }

            function prepareForHtmlResponse() {
                //Show CodeMirror and hide json viewer
                $(CODE_MIRROR_CONTAINER).removeClass('hide');
                $(JSON_VIEWER_CONTROL).addClass('hide');
            }

            function hide() {
                $(CODE_MIRROR_CONTAINER).addClass('hide');
                $(JSON_VIEWER_CONTROL).addClass('hide');
            }

            function initCodeMirror() {
                _codeMirror = CodeMirror.fromTextArea(document.getElementById(CODE_MIRROR_TEXTAREA_ID), {
                    mode: "xml",
                    lineWrapping: true,
                    lineNumbers: true,
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    matchBrackets: true,
                    autoCloseBrackets: true
                });
            }

            scope.refreshResponseContainerDimentions = function () {
                $('#markdown-response > .CodeMirror').height(window.innerHeight - 150 - $('#attributes-container').height());
                $('#json-response').height(window.innerHeight - 150);
            }

            //hack for correct width of codemirror editor when the content has very long lines
            $(window).resize(function () {
                scope.refreshResponseContainerDimentions();
                scope.$apply();
            });

            $(document).ready(function () {
                scope.refreshResponseContainerDimentions();
            });
        }
    };
});