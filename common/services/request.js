app.factory('Request', function () {

    return {
        execute: function (request) {

            return $.ajax({
                method: request.method,
                url: request.uri,
                beforeSend: function (xhr) {
                    var headers = request.headers;
                    for (var idx = 0; idx < headers.length; idx++) {
                        var header = headers[idx];
                        xhr.setRequestHeader(header.name, header.value);
                    }
                }
            });
        }
    }

});