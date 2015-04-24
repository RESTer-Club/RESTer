'use strict';

describe('Unit testing request mody', function () {
    var $compile,
        $scope,
        element;

    beforeEach(module('RESTer'));
    beforeEach(module('common/directives/request-body/request-body-template.html'));

    beforeEach(inject(function (_$rootScope_, _$compile_) {
        $scope = _$rootScope_;
        $scope.request = {};
        $compile = _$compile_;
        element = angular.element('<request-body></request-body>');
        $compile(element)($scope);
        $scope.$digest();
    }));

    it('Replaces the element with the appropriate content', function () {
        expect(element.html()).toContain('Headers');
    });

    //    it('addNewHeader when there are no headers', function () {
    //        $scope.request.headers = [];
    //        $scope.addNewHeader();
    //        expect($scope.request.headers.length).toEqual(1);
    //    });
});