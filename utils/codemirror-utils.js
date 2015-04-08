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
                lineNumbers: true,
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
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
            this.setOption("mode", mode);
        },
        setOption: function (option, value) {
            if (codeMirror == null || typeof (option) === 'undefined' || typeof (value) === 'undefined') {
                console.error("Can't set option");
                return;
            }

            codeMirror.setOption(option, value);
        },
        clear: function () {
            this.setValue("");
        }
    };

}());