angular.module('ecoop')

.controller('RootController', function($scope, $state)	{

	$scope.showMenuBtn = function(){
		if ($state.current.name == 'app.login')
			return false;
		return true;
	}
	$scope.showTabBar = function(){
		if ($state.current.name == 'app.login')
			return false;
		return true;
	}
});