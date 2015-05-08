'use strict';

var RequestModel = (function () { // jshint ignore:line

    var uri = 'https://abv.bg',
        method = '',
        body = '',
        headers = [];

    function RequestModel() {

    }

    Object.defineProperty(RequestModel.prototype, 'uri', {
        get: function () {
            return uri;
        },
        set: function (value) {
            uri = value;
        },
        enumerable: false
    });

    Object.defineProperty(RequestModel.prototype, 'method', {
        get: function () {
            return method;
        },
        set: function (value) {
            method = value;
        },
        enumerable: false
    });

    Object.defineProperty(RequestModel.prototype, 'body', {
        get: function () {
            return body;
        },
        set: function (value) {
            body = value;
        },
        enumerable: false
    });

    Object.defineProperty(RequestModel.prototype, 'headers', {
        get: function () {
            return headers;
        },
        set: function (value) {
            headers = value;
        },
        enumerable: false
    });

    RequestModel.prototype.reset = function (isHeaderAreaExpanded, defaultMethod) {
        uri = '';
        method = defaultMethod || AVAILABLE_METHODS[0];
        body = '';
        if (isHeaderAreaExpanded) {
            this.headers = [{
                name: '',
                value: ''
            }];
        } else {
            headers = [];
        }
    };

    return RequestModel;
})();