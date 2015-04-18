var RequestModel = (function () {

    function RequestModel() {
        this._uri = "http://jsonplaceholder.typicode.com/posts/2";
        this._method;
        this._contentType;
        this._headers = [];
    }

    Object.defineProperty(RequestModel.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        set: function (value) {
            this._uri = value;
        }
    });

    Object.defineProperty(RequestModel.prototype, "method", {
        get: function () {
            return this._method;
        },
        set: function (value) {
            this._method = value;
        }
    });

    Object.defineProperty(RequestModel.prototype, "contentType", {
        get: function () {
            return this._contentType;
        },
        set: function (value) {
            this._contentType = value;
        }
    });

    Object.defineProperty(RequestModel.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        set: function (value) {
            this._headers = value;
        }
    });

    RequestModel.prototype.reset = function (isHeaderAreaExpanded, defaultMethod) {
        this.uri = "";
        this.method = defaultMethod;
        this.contentType = "";
        if (isHeaderAreaExpanded) {
            this.headers = [{
                name: "",
                value: ""
            }];
        } else {
            this.headers = []
        }
    };

    return RequestModel;
})();