'use strict';

describe('Unit testing request model', function () {

    beforeEach(module('RESTer'));


//    it('Request model initialization', function () {
//        var requestModel = new RequestModel();
//        expect(requestModel.uri).toEqual('');
//        expect(requestModel.method).toEqual('');
//        expect(requestModel.body).toEqual('');
//        expect(requestModel.headers.length).toEqual(0);
//    });

    it('Reset model prior to initialization', function () {
        var requestModel = new RequestModel();
        requestModel.reset();
        expect(requestModel.uri).toEqual('');
        expect(requestModel.method.name).toEqual('GET');
        expect(requestModel.body).toEqual('');
        expect(requestModel.headers.length).toEqual(0);
    });

    it('Reset model when header area is expanded and default method is POST', function () {
        var requestModel = new RequestModel();
        var isHeaderAreaExpanded = true,
            defaultMethod = AVAILABLE_METHODS[1];//POST
        requestModel.reset(isHeaderAreaExpanded, defaultMethod);
        expect(requestModel.uri).toEqual('');
        expect(requestModel.body).toEqual('');
        expect(requestModel.method.name).toEqual('POST');
        expect(requestModel.headers.length).toEqual(1);
        expect(requestModel.headers[0].name).toEqual('');
        expect(requestModel.headers[0].value).toEqual('');
    });

    it('Reset model when header area is NOT expanded and default method is POST', function () {
        var requestModel = new RequestModel();
        var isHeaderAreaExpanded = false,
            defaultMethod = AVAILABLE_METHODS[1];//POST
        requestModel.reset(isHeaderAreaExpanded, defaultMethod);
        expect(requestModel.uri).toEqual('');
        expect(requestModel.body).toEqual('');
        expect(requestModel.method.name).toEqual('POST');
        expect(requestModel.headers.length).toEqual(0);
    });

});