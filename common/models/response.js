var ResponseModel = (function () {

    function ResponseModel() {
        this._statusText = "";
        this._statusCode = "";
        this._contentType = "";
        this._responseTime = "";
        this._data = "";
    }

    Object.defineProperty(ResponseModel.prototype, "statusText", {
        get: function () {
            return this._statusText;
        },
        set: function (value) {
            this._statusText = value;
        }
    });

    Object.defineProperty(ResponseModel.prototype, "statusCode", {
        get: function () {
            return this._statusCode;
        },
        set: function (value) {
            this._statusCode = value;
        }
    });

    Object.defineProperty(ResponseModel.prototype, "contentType", {
        get: function () {
            return this._contentType;
        },
        set: function (value) {
            this._contentType = value;
        }
    });

    Object.defineProperty(ResponseModel.prototype, "responseTime", {
        get: function () {
            return this._responseTime;
        },
        set: function (value) {
            this._responseTime = value;
        }
    });

    Object.defineProperty(ResponseModel.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        }
    });

    ResponseModel.prototype.set = function (xhr, responseTime) {
        if (typeof (xhr) === 'undefined') {
            return;
        }

        if (typeof (responseTime) === 'undefined') {
            responseTime = '0';
        }

        this.contentType = xhr.getResponseHeader("content-type") || "";
        this.data = xhr.responseText || "";
        this.statusCode = xhr.status || "";
        this.statusText = this.statusCode + ": " + xhr.statusText || "";
        this.responseTime = responseTime;
    };

    ResponseModel.prototype.reset = function () {
        this.contentType = "";
        this.data = "";
        this.statusCode = "";
        this.statusText = "";
        this.responseTime = "";
    };

    return ResponseModel;
})();