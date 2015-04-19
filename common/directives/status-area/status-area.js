'use strict';

var STATUS_AREA = '.status-area';

app.directive('statusArea', function () {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'common/directives/status-area/status-area-template.html',
        link: function (scope, elem, attrs) {

            attrs.$observe('code', function (value) {

                //Show status area if there is response code but the response body is empty
                //TODO: Visibility change is not covered by unit tests
                if (value) {
                    $(STATUS_AREA).removeClass('hide');
                } else {
                    $(STATUS_AREA).addClass('hide');
                }

                if (/^1/.test(value)) {
                    scope.statusState = 'info';
                } else if (/^2/.test(value)) {
                    scope.statusState = 'success';
                } else if (/^3/.test(value)) {
                    scope.statusState = 'warning';
                } else if (/^4/.test(value)) {
                    scope.statusState = 'danger';
                } else if (/^5/.test(value)) {
                    scope.statusState = 'danger';
                } else {
                    scope.statusState = 'default';
                }
            });
        }
    };
});