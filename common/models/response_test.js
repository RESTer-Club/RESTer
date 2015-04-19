'use strict';

describe('Unit testing response model', function () {

    beforeEach(module('RESTer'));


    it('Response model initialization', function () {
        var responseModel = new ResponseModel();
        expect(responseModel.statusText).toEqual('');
        expect(responseModel.statusCode).toEqual('');
        expect(responseModel.contentType).toEqual('');
        expect(responseModel.responseTime).toEqual('');
        expect(responseModel.data).toEqual('');
    });

    it('Response model reset', function () {
        var responseModel = new ResponseModel();

        responseModel.statusText = '2Test Status Text';
        responseModel.statusCode = '200';
        responseModel.contentType = 'json';
        responseModel.responseTime = '123';
        responseModel.data = 'Test Body';

        responseModel.reset();

        expect(responseModel.statusText).toEqual('');
        expect(responseModel.statusCode).toEqual('');
        expect(responseModel.contentType).toEqual('');
        expect(responseModel.responseTime).toEqual('');
        expect(responseModel.data).toEqual('');
    });

    it('Response model set valid', function () {
        var responseModel = new ResponseModel();

        var xhr = {
            getResponseHeader: function () {
                return "json";
            },
            responseText: 'Test Response Text',
            status: '200',
            statusText: 'OK'
        };

        var responseTime = '123';

        responseModel.set(xhr, responseTime);

        expect(responseModel.statusText).toEqual('200: OK');
        expect(responseModel.statusCode).toEqual('200');
        expect(responseModel.contentType).toEqual('json');
        expect(responseModel.responseTime).toEqual('123');
        expect(responseModel.data).toEqual('Test Response Text');
    });

    it('Response model set undefined arguments', function () {
        var responseModel = new ResponseModel();

        responseModel.set();

        expect(responseModel.statusText).toEqual('');
        expect(responseModel.statusCode).toEqual('');
        expect(responseModel.contentType).toEqual('');
        expect(responseModel.responseTime).toEqual('');
        expect(responseModel.data).toEqual('');
    });

    it('Response model set undefined response time', function () {
        var responseModel = new ResponseModel();

        var xhr = {
            getResponseHeader: function () {
                return "json";
            },
            responseText: 'Test Response Text',
            status: '200',
            statusText: 'OK'
        };

        responseModel.set(xhr);

        expect(responseModel.statusText).toEqual('200: OK');
        expect(responseModel.statusCode).toEqual('200');
        expect(responseModel.contentType).toEqual('json');
        expect(responseModel.responseTime).toEqual('0');
        expect(responseModel.data).toEqual('Test Response Text');
    });


});