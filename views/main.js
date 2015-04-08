var mainView = (function () {

    return {
        setResponse: function (data, contentType) {
            var responseEl = $("#response"),
                responseHtml = $("html-container");


            if (typeof (data) === 'undefined' ||
                typeof (contentType) === 'undefined') {
                console.error("Can't set response");
                return;
            }

            if (contentType.indexOf('html') > -1) {
                //HTML response
                codeMirrorUtils.setMode("text/html");
                codeMirrorUtils.setValue(data);
            } else if (contentType.indexOf('json') > -1) {
                //JSON response
                codeMirrorUtils.setMode("application/ld+json");
                codeMirrorUtils.setValue(data);
            } else {
                console.warn("Not Handled");
            }
        }
    };

}());