var mainView = (function () {

    return {
        setResponse: function (data, contentType) {
            var responseEl = $("#response"),
                statusLabelEl = $("#status-label");

            if (typeof (data) === 'undefined' ||
                typeof (contentType) === 'undefined') {
                responseEl.jsonViewer("ERROR");
                return;
            }

            if (typeof (contentType) === 'undefined') {
                responseEl.jsonViewer("ERROR");
                return;
            }

            if (contentType.indexOf('html') > -1) {
                //HTML response
            } else if (contentType.indexOf('json') > -1) {
                //JSON response
                responseEl.jsonViewer(data);
            } else {
                responseEl.jsonViewer("NOT HANDLED");
            }
        },

        setStatus: function (code, text) {
            var responseEl = $("#response"),
                statusLabelEl = $("#status-label");

            if (typeof (code) === 'undefined' ||
                typeof (text) === 'undefined') {
                statusLabelEl.jsonViewer("ERROR");
                return;
            }

            statusLabelEl.text(code + ": " + text);
        }
    };

}());