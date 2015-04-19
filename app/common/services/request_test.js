'use strict';

describe('Unit testing request service', function () {

    var $scope,
        Request;

    beforeEach(module('RESTer'));

    beforeEach(inject(function (_$rootScope_) {
        $scope = _$rootScope_;
    }));

    beforeEach(function () {
        inject(function ($injector) {
            Request = $injector.get('Request');
        });
    });

    it('call execute when request is undefined ', function () {
        var request = Request.execute();
        expect(request).toBeUndefined();
    });

    it('call execute when request method is undefined', function () {
        var sampleRequest = {
            uri: 'http://google.com',
            headers: []
        };
        var request = Request.execute(sampleRequest);
        expect(request).toBeUndefined();
    });

    it('call execute when request ri is undefined', function () {
        var sampleRequest = {
            method: 'GET',
            headers: []
        };
        var request = Request.execute(sampleRequest);
        expect(request).toBeUndefined();
    });
});