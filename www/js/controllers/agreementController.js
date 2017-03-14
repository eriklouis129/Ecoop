angular.module('ecoop')

.controller('AgreementController', function($scope, $state, $ionicViewSwitcher, $ionicHistory, $ionicScrollDelegate)	{

	$scope.showContractSearchForm = false;
    
     //Changes class of button depending on click for customer type
    $scope.activeSectionContractCustomerType = 0;
    
    $scope.changeSectionContractCustomerType = function(s){
        $scope.activeSectionContractCustomerType = s;
        //Resets value of following buttons to 0
        $scope.activeSectionDifferentBillingAddress = 0;
        $scope.activeSectionDifBilAddCustomerType = 0;
        $scope.activeSectionDeliveryCustType = 0;
        $ionicScrollDelegate.resize();
    }
    
     //Changes class of button depending on click for different billing address
    $scope.activeSectionDifferentBillingAddress = 0;
    
    $scope.changeSectionDifferentBillingAddress = function(s){
        $scope.activeSectionDifferentBillingAddress = s;
        //Resets value of following buttons to 0
        $scope.activeSectionDifBilAddCustomerType = 0;
        $scope.activeSectionDeliveryCustType = 0;
        $ionicScrollDelegate.resize();
    }
    
     //Changes class of button depending on click for customer type when different billing address is yes
    $scope.activeSectionDifBilAddCustomerType = 0;
    
    $scope.changeSectionDifBilAddCustomerType = function(s){
        $scope.activeSectionDifBilAddCustomerType = s;
         //Resets value of following buttons to 0
        $scope.activeSectionDeliveryCustType = 0;
        $ionicScrollDelegate.resize();
    }
    
     //Changes class of button depending on click for delivery address customer type 
    $scope.activeSectionDeliveryCustType = 0;
    
    $scope.changeSectionDeliveryCustType = function(s){
        $scope.activeSectionDeliveryCustType = s;
        $ionicScrollDelegate.resize();
    }

})