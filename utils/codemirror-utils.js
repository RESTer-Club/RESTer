$(document).ready(function () {

    codeMirrorUtils.init("codemirror");
});

var codeMirrorUtils = (function () {

    var codeMirror = null;
    var containerId = "#markdown-response";

    return {
        init: function (elementId) {
            codeMirror = CodeMirror.fromTextArea(document.getElementById(elementId), {
                mode: "xml",
                lineWrapping: true,
                viewportMargin: Infinity,
                lineNumbers: true,
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                matchBrackets: true,
                autoCloseBrackets: true
            });

            this.hide();
        },
        setValue: function (content) {
            if (codeMirror == null || typeof (content) === 'undefined') {
                return;
            }

            this.show();
            codeMirror.getDoc().setValue(content);
        },
        show: function () {
            $(containerId).removeClass('hide');
        },
        hide: function () {
            $(containerId).addClass('hide');
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