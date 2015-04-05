var HttpRequest = {

    send: function (uri, method) {
        
        var responseEl = $("#response");
        var statusLabelEl = $("#status-label");
        
        if(typeof(uri) === 'undefined'){
            responseEl.jsonViewer("HTTP URL is not set");
            return;
        }
        
        if(uri.length == 0){
            responseEl.jsonViewer("HTTP URL is not set");
            return;
        }
        
        if(typeof(method) === 'undefined'){
            responseEl.jsonViewer("HTTP Method is not set");
            return;
        }
        
        if(method.length == 0){
            responseEl.jsonViewer("HTTP Method is not set");
            return;
        }

        var request = $.ajax({
            method: method,
            url: uri
        });

        request.done(function (data, statusText, xhr) {
            if (typeof (data) === 'undefined') {
                return;
            }

            var ct = xhr.getResponseHeader("content-type") || "";
            if (ct.indexOf('html') > -1) {
                //do something
            }
            if (ct.indexOf('json') > -1) {
                responseEl.jsonViewer(data);
                statusLabelEl.text(xhr.status + ": " + xhr.statusText);
            }
        });

        request.fail(function (jqXHR, statusText) {
            responseEl.jsonViewer("ERROR");
            statusLabelEl.text(jqXHR.status + ": " + jqXHR.statusText);
        });
    }
};