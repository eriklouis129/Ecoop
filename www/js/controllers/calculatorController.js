angular.module('ecoop')

.controller('CalculatorController', function($scope, $state, $ionicViewSwitcher, $ionicHistory, $ionicScrollDelegate)	{

	$scope.tariffInfo = {
		type: 0,
		innerType: 0,
		customerType: 0,
		choice: 0,
		contactTerms: 0,
		heartFlowChoice: 0,
		isCalculated: false
	}
    
    $scope.changeSectionTariffType = function(s){
    	$scope.tariffInfo.type = s;
    	$scope.tariffInfo.innerType = 0;
    	$scope.tariffInfo.customerType = 0;
    	$scope.tariffInfo.choice = 0;
    	$scope.tariffInfo.contactTerms = 0;
    	$scope.tariffInfo.heartFlowChoice = 0;
    	$scope.tariffInfo.isCalculated = false;
    	$ionicScrollDelegate.resize();
    }
    
    //Changes class of button depending on click for "inner" tariff type (basic or premium)
    $scope.changeSectionInnerTariffType = function(s){
    	$scope.tariffInfo.innerType = s;
    	$scope.tariffInfo.customerType = 0;
    	$scope.tariffInfo.choice = 0;
    	$scope.tariffInfo.contactTerms = 0;
    	$scope.tariffInfo.heartFlowChoice = 0;
    	$scope.tariffInfo.isCalculated = false;
    	$ionicScrollDelegate.resize();
    }
    
    //Changes class of button depending on click for customer type (private or business)
    $scope.changeSectionCustomerType = function(s){
    	$scope.tariffInfo.customerType = s;
    	$scope.tariffInfo.choice = 0;
    	$scope.tariffInfo.contactTerms = 0;
    	$scope.tariffInfo.heartFlowChoice = 0;
    	$scope.tariffInfo.isCalculated = false;
    	$ionicScrollDelegate.resize();
    }
    
    //Changes class of button depending on click for different tariff choices
    $scope.changeSectionTariffChoice = function(s){
    	$scope.tariffInfo.choice = s;
    	$scope.tariffInfo.contactTerms = 0;
    	$scope.tariffInfo.heartFlowChoice = 0;
    	$scope.tariffInfo.isCalculated = false;
    	$ionicScrollDelegate.resize();
    }
    
    //Changes class of button depending on click for contract duration
    $scope.changeSectionContractTerm = function(s){
    	$scope.tariffInfo.contactTerms = s;
    	$scope.tariffInfo.heartFlowChoice = 0;
    	$scope.tariffInfo.isCalculated = false;
    	$ionicScrollDelegate.resize();
    }
    
    //Changes class of button depending on click for heat flow choice
    $scope.changeSectionHeatFlowChoice = function(s){
    	$scope.tariffInfo.heartFlowChoice = s;
    	$scope.tariffInfo.isCalculated = false;
    	$ionicScrollDelegate.resize();
    }
    
    //Changes class of button depending on click for calculation
    $scope.changeSectionCalculate = function(s){
        $scope.tariffInfo.isCalculated = true;
        $ionicScrollDelegate.resize();
    }
})