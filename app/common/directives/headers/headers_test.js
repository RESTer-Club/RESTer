'use strict';

describe('Unit testing headers', function () {
    var $compile,
        $scope,
        element;

    beforeEach(module('RESTer'));
    beforeEach(module('common/directives/headers/headers-template.html'));

    beforeEach(inject(function (_$rootScope_, _$compile_) {
        $scope = _$rootScope_;
        $scope.request = {};
        $compile = _$compile_;
        element = angular.element('<headers></headers>');
        $compile(element)($scope);
        $scope.$digest();
    }));

    it('Replaces the element with the appropriate content', function () {
        expect(element.html()).toContain('Headers');
    });

    it('addNewHeader when there are no headers', function () {
        $scope.request.headers = [];
        $scope.addNewHeader();
        expect($scope.request.headers.length).toEqual(1);
    });

    it('addNewHeader when there is an existing header', function () {
        $scope.request.headers = [{
            name: 'TestName',
            value: 'TestValue'
        }];
        $scope.addNewHeader();
        expect($scope.request.headers.length).toEqual(2);
    });

    it('deleteHeader when there are no headers', function () {
        $scope.request.headers = [];
        $scope.deleteHeader(0);
        expect($scope.request.headers.length).toEqual(0);
    });

    it('deleteHeader when there is an existing header', function () {
        $scope.request.headers = [{
            name: 'TestName',
            value: 'TestValue'
        }];
        $scope.deleteHeader(0);
        expect($scope.request.headers.length).toEqual(1);
        expect($scope.request.headers[0].name).toEqual('');
        expect($scope.request.headers[0].value).toEqual('');
    });

    it('deleteHeader when there are several existing headers and the position of the deleted item is out of range', function () {
        $scope.request.headers = [{
            name: 'TestName1',
            value: 'TestValue1'
        }, {
            name: 'TestName2',
            value: 'TestValue2'
        }];
        $scope.deleteHeader(4);
        expect($scope.request.headers.length).toEqual(2);
    });

    it('deleteHeader when there are several existing headers and delete the first one', function () {
        $scope.request.headers = [{
            name: 'TestName1',
            value: 'TestValue1'
        }, {
            name: 'TestName2',
            value: 'TestValue2'
        }];
        $scope.deleteHeader(0);
        expect($scope.request.headers.length).toEqual(1);
        expect($scope.request.headers[0].name).toEqual('TestName2');
        expect($scope.request.headers[0].value).toEqual('TestValue2');
    });

    it('deleteHeader when there are several existing headers and delete the second one', function () {
        $scope.request.headers = [{
            name: 'TestName1',
            value: 'TestValue1'
        }, {
            name: 'TestName2',
            value: 'TestValue2'
        }];
        $scope.deleteHeader(1);
        expect($scope.request.headers.length).toEqual(1);
        expect($scope.request.headers[0].name).toEqual('TestName1');
        expect($scope.request.headers[0].value).toEqual('TestValue1');
    });

    it('expandHeaders when there are no headers and the header area is NOT expanded', function () {
        $scope.request.headers = [];
        $scope.isHeaderAreaExpanded = false;
        $scope.expandHeaders();
        expect($scope.request.headers.length).toEqual(1);
        expect($scope.request.headers[0].name).toEqual('');
        expect($scope.request.headers[0].value).toEqual('');
    });

    it('expandHeaders when there are headers and the header area is NOT expanded', function () {
        $scope.request.headers = [{
            name: 'TestName1',
            value: 'TestValue1'
        }, {
            name: 'TestName2',
            value: 'TestValue2'
        }];
        $scope.isHeaderAreaExpanded = false;
        $scope.expandHeaders();
        expect($scope.request.headers.length).toEqual(2);
    });

    it('expandHeaders when there is a header and the header area is NOT expanded', function () {
        $scope.request.headers = [{
            name: 'TestName1',
            value: 'TestValue1'
        }];
        $scope.isHeaderAreaExpanded = false;
        $scope.expandHeaders();
        expect($scope.request.headers.length).toEqual(1);
    });

    it('expandHeaders when there is a blank header and the header area is NOT expanded', function () {
        $scope.request.headers = [{
            name: '',
            value: ''
        }];
        $scope.isHeaderAreaExpanded = false;
        $scope.expandHeaders();
        expect($scope.request.headers.length).toEqual(1);
    });

    it('expandHeaders when there is a blank header and the header area is expanded', function () {
        $scope.request.headers = [{
            name: '',
            value: ''
        }];
        $scope.isHeaderAreaExpanded = true;
        $scope.expandHeaders();
        expect($scope.request.headers.length).toEqual(0);
    });

    it('expandHeaders when there are headers and the header area is expanded', function () {
        $scope.request.headers = [{
            name: 'TestName1',
            value: 'TestValue1'
        }, {
            name: 'TestName2',
            value: 'TestValue2'
        }];
        $scope.isHeaderAreaExpanded = true;
        $scope.expandHeaders();
        expect($scope.request.headers.length).toEqual(2);
    });

    it('expandHeaders when there are headers and the header area is expanded and the second header is blank', function () {
        $scope.request.headers = [{
            name: 'TestName1',
            value: 'TestValue1'
        }, {
            name: '',
            value: ''
        }];
        $scope.isHeaderAreaExpanded = true;
        $scope.expandHeaders();
        expect($scope.request.headers.length).toEqual(2);
    });

    it('expandHeaders when there are headers and the header area is expanded and the first header is blank', function () {
        $scope.request.headers = [{
            name: '',
            value: ''
        }, {
            name: 'TestName2',
            value: 'TestValue2'
        }];
        $scope.isHeaderAreaExpanded = true;
        $scope.expandHeaders();
        expect($scope.request.headers.length).toEqual(2);
    });

    it('expandHeaders when there are no headers and the header area is expanded (not a real case)', function () {
        $scope.request.headers = [];
        $scope.isHeaderAreaExpanded = true;
        $scope.expandHeaders();
        expect($scope.request.headers.length).toEqual(0);
    });

    it('expandHeaders should change $scope.isHeaderAreaExpanded anytime it is called', function () {
        $scope.request.headers = [];
        $scope.isHeaderAreaExpanded = true;
        $scope.expandHeaders();
        expect($scope.isHeaderAreaExpanded).toEqual(false);
        $scope.expandHeaders();
        expect($scope.isHeaderAreaExpanded).toEqual(true);
    });
});