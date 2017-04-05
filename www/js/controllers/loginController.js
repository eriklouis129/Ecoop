angular.module('ecoop')

.controller('LoginController', function($scope, $state, $ionicViewSwitcher, $ionicHistory, ApiService)	{
                    
	$scope.$on('$ionicView.beforeEnter', function(){

		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
	})
	$scope.creds = {
		email: null,
		pass: null
	}

	$scope.login = function(email, pass){

		ApiService.getSuppliers(['electricity', 'e.on']).then(
			function(resSuccess){
				$state.go('app.tab.calculator')
			}, function(resError){
				$state.go('app.tab.calculator')
			}
		)
	}

})