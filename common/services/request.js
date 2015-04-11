app.service('Request', function(Request) {

    this.execute = function(uri, method) {
        var request = $.ajax({
            method: method,
            url: uri
        });
    };

});
