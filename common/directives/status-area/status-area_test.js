describe('Unit testing status area', function () {
    var $compile,
        $scope,
        element;

    beforeEach(module('RESTer'));
    beforeEach(module('common/directives/status-area/status-area-template.html'));

    beforeEach(inject(function (_$rootScope_, _$compile_) {
        $scope = _$rootScope_;
        $scope.response = {};
        $compile = _$compile_;
        element = angular.element('<status-area code="{{ response.statusCode }}"></status-area>');
        $compile(element)($scope);
        $scope.$digest();
    }));

    it('Replaces the element with the appropriate content', function () {
        expect(element.html()).toContain('status-area');
    });

    it('statusState should be info when the code starts with 1', function () {
        $scope.response.statusCode = 100;
        $scope.$digest();
        expect($scope.statusState).toEqual('info');
    });

    it('statusState should be success when the code starts with 2', function () {
        $scope.response.statusCode = 200;
        $scope.$digest();
        expect($scope.statusState).toEqual('success');
    });

    it('statusState should be warning when the code starts with 3', function () {
        $scope.response.statusCode = 300;
        $scope.$digest();
        expect($scope.statusState).toEqual('warning');
    });

    it('statusState should be danger when the code starts with 4', function () {
        $scope.response.statusCode = 400;
        $scope.$digest();
        expect($scope.statusState).toEqual('danger');
    });

    it('statusState should be danger when the code starts with 5', function () {
        $scope.response.statusCode = 500;
        $scope.$digest();
        expect($scope.statusState).toEqual('danger');
    });

    it('statusState should be default when the code does not start with 1,2,3,4 or 5', function () {
        $scope.response.statusCode = 600;
        $scope.$digest();
        expect($scope.statusState).toEqual('default');
    });
});