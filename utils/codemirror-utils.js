$(document).ready(function () {

    codeMirrorUtils.init("codemirror");
});

var codeMirrorUtils = (function () {

    var codeMirror = null;

    return {
        init: function (elementId) {
            codeMirror = CodeMirror.fromTextArea(document.getElementById(elementId), {
                mode: "xml",
                lineWrapping: true,
                viewportMargin: Infinity,
//                lineNumbers: true,
//                matchBrackets: true,
//                autoCloseBrackets: true
            });
        },
        setValue: function (content) {
            if (codeMirror == null || typeof (content) === 'undefined') {
                return;
            }

            codeMirror.getDoc().setValue(content);
        },
        setMode: function (mode) {
            if (codeMirror == null || typeof (mode) === 'undefined') {
                return;
            }

            codeMirror.setOption("mode", mode);
        },
        clear: function () {
            this.setValue("");
        }
    };

}());