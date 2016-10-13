var app = angular.module('app',['ngRoute','app.vmap','jtt_openweathermap','app.loading']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl : 'views/map.html',
	})
	.otherwise({
		redirectTo : '/'
	});
}]);