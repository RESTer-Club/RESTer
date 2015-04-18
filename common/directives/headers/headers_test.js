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

    it('deleteHeader when there is an existing headers', function () {
        $scope.request.headers = [{
            name: 'TestName',
            value: 'TestValue'
        }];
        $scope.deleteHeader(0);
        expect($scope.request.headers.length).toEqual(1);
        expect($scope.request.headers[0].name).toEqual('');
        expect($scope.request.headers[0].value).toEqual('');
    });
});