var app = angular.module('mainApp', ['ng-route']);
app.config(function($routeprovider) {
	$routeprovider
	.when ('/', {
		templateUrl : 'templates/login.html'
	})
	.when('/dashboard',
	{
templateUrl : 'templates/dashboard.html'
	})
 .otherwise({
 	redirectTo : '/'
 });
});
app.controller('loginctrl', function($scope,$location){
$scope.submit = function() {
var uname = $scope.username;
var password = $scope.password;
if($scope.username == 'admin' && $scope.password == 'admin'){
$location.path('/dashboard');
}
else {

	alert('wrong stuff');
}
}
});