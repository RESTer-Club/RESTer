angular.module('rester', [])
    .controller('httpRequestController', function () {
        var httpRequester = this;

        httpRequester.uri = "";

        httpRequester.methods = [
            {
                text: 'GET'
            },
            {
                text: 'POST'
            },
            {
                text: 'PUT'
            },
            {
                text: 'DELETE'
            }
    ];

        httpRequester.currentMethod = httpRequester.methods[0];

        httpRequester.setMethod = function (methodType) {
            if (typeof (methodType) === 'undefined') {
                return;
            }

            httpRequester.currentMethod = methodType;
        };

        httpRequester.send = function () {
            if(httpRequester.uri.length == 0){
                mainView.setResponse();
                return;
            }
            
            var request = $.ajax({
                method: httpRequester.currentMethod.text,
                url: httpRequester.uri
            });

            request.done(function (data, statusText, xhr) {
                if (typeof (xhr) === 'undefined') {
                    return;
                }
                
                var contentType = xhr.getResponseHeader("content-type") || "";
                var statusCode = xhr.status;
                
                mainView.setResponse(data, contentType); 
                mainView.setStatus(statusCode, statusText);
            });

            request.fail(function (xhr, statusText) {
                if (typeof (xhr) === 'undefined') {
                    return;
                }

                var statusCode = xhr.status;

                mainView.setResponse();
                mainView.setStatus(statusCode, statusText);
            });
        };

        httpRequester.reset = function () {
            console.log("test");
        };
    });