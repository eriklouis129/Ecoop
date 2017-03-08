angular.module('ecoop')

.controller('HomeController', function($scope, $ionicHistory)	{

	$scope.$on('$ionicView.beforeEnter', function(){

		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
	})
	$scope.creds = {
		email: null,
		pass: null
	}

	$scope.login = function(email, pass){

		$scope.go('app.home')
	}

})