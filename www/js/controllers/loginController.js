angular.module('ecoop')

.controller('LoginController', function($scope, $state, $ionicViewSwitcher, $ionicHistory)	{

	$scope.$on('$ionicView.beforeEnter', function(){

		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
	})
	$scope.creds = {
		email: null,
		pass: null
	}

	$scope.login = function(email, pass){

		// $ionicViewSwitcher.nextDirection('moveForward');
		$state.go('app.tab.calculator')
	}

})