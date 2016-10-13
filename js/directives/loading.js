angular.module('app.loading', [])
.directive('loading', ['$interval', '$timeout', function ($interval, $timeout) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "js/directives/template/loading.html",
        link: function (scope, element, attr) {
            scope.$watch('loading', function (val) {
                var i = 0;
                if (val)
                {
                    $(element).show();
                }
                else
                {
                    $(element).hide();
                }
            });
        }
    }
}])