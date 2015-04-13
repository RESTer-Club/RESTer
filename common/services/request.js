app.factory('Request', function () {

    return {
        execute: function (uri, method) {
            return $.ajax({
                method: method,
                url: uri
            });
        }
    }

});