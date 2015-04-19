app.factory('Request', function () {

    return {
        execute: function (request) {

            if (typeof (request) === 'undefined') {
                return;
            }

            if (typeof (request.method) === 'undefined' ||
                typeof (request.uri) === 'undefined' ||
                typeof (request.headers) === 'undefined'
            ) {
                return;
            }

            return $.ajax({
                method: request.method,
                url: request.uri,
                beforeSend: function (xhr) {
                    var headers = request.headers;
                    for (var idx = 0; idx < headers.length; idx++) {
                        var header = headers[idx];
                        if (typeof (header.name) !== 'undefined' && typeof (header.value) !== 'undefined') {
                            if (header.name.length > 0 && header.value.length > 0) {
                                xhr.setRequestHeader(header.name, header.value);
                            }
                        }
                    }
                }
            });
        }
    }
});