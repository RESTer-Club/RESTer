'use strict';

app.directive('headers', function () {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'common/directives/headers/headers-template.html',
        link: function (scope, elem, attrs) {

        }
    };
});