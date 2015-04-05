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
            HttpRequest.send(httpRequester.uri, httpRequester.currentMethod.text);
        };

        httpRequester.reset = function () {
            console.log("test");
        };
    });