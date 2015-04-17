app.factory('Request', function () {

    return {
        execute: function (uri, method, headers) {

            return $.ajax({
                method: method,
                url: uri,
                beforeSend: function (xhr) {
                    for (var idx = 0; idx < headers.length; idx++) {
                        var header = headers[idx];
                        xhr.setRequestHeader(header.name, header.value);
                    }
                }
            });
        }
    }

});