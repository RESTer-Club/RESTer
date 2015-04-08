var mainView = (function () {

    return {
        setResponse: function (data, contentType) {
            
            var markdownResponseElement = $("#markdown-response"),
                jsonResponseElement = $("#json-response");
            
            if (typeof (data) === 'undefined' ||
                typeof (contentType) === 'undefined') {
                console.error("Can't set response");
                return;
            }

            if (contentType.indexOf('html') > -1) {
                //HTML response
                jsonResponseElement.hide();
                markdownResponseElement.show();
                codeMirrorUtils.setMode("xml");
                codeMirrorUtils.setValue(data);
            } else if (contentType.indexOf('json') > -1) {
                //JSON response
                markdownResponseElement.hide();
                jsonResponseElement.show();
                jsonResponseElement.jsonViewer(data);
            } else {
                console.warn("Not Handled");
            }
        }
    };

}());