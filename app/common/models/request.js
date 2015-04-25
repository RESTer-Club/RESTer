'use strict';

var RequestModel = (function () { // jshint ignore:line

    function RequestModel() {
        this._uri = 'https://testtap.telerik.com/api/internal/system/features';
        this._method = '';
        this._body = '';
        this._headers = [];
    }

    Object.defineProperty(RequestModel.prototype, 'uri', {
        get: function () {
            return this._uri;
        },
        set: function (value) {
            this._uri = value;
        }
    });

    Object.defineProperty(RequestModel.prototype, 'method', {
        get: function () {
            return this._method;
        },
        set: function (value) {
            this._method = value;
        }
    });

    Object.defineProperty(RequestModel.prototype, 'body', {
        get: function () {
            return this._body;
        },
        set: function (value) {
            this._body = value;
        }
    });

    Object.defineProperty(RequestModel.prototype, 'headers', {
        get: function () {
            return this._headers;
        },
        set: function (value) {
            this._headers = value;
        }
    });

    RequestModel.prototype.reset = function (isHeaderAreaExpanded, defaultMethod) {
        this.uri = '';
        this.method = defaultMethod || AVAILABLE_METHODS[0];
        this.body = '';
        if (isHeaderAreaExpanded) {
            this.headers = [{
                name: '',
                value: ''
            }];
        } else {
            this.headers = [];
        }
    };

    return RequestModel;
})();