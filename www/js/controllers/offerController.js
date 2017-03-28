angular.module('ecoop')

.controller('OfferController', function($scope, $state, $stateParams, $ionicViewSwitcher, $ionicHistory, $ionicScrollDelegate)	{

	$scope.privateFields = [
								{title: 'Anrede', type: 'select', value: ''}, 
								{title: 'Titel', type: 'select', value: ''}, 
								{title: 'Vorname', type: 'text', value: ''}, 
								{title: 'Nachname', type: 'text', value: ''}, 
								{title: 'Geburtstag', type: 'date', value: ''}, 
								{title: 'PLZ', type: 'text', value: ''}, 
								{title: 'Ort', type: 'text', value: ''}, 
								{title: 'Straße', type: 'text', value: ''}, 
								{title: 'Hausnummer', type: 'text', value: ''}, 
								{title: 'Zusatz', type: 'text', value: ''}, 
								{title: 'Telefon', type: 'tel', value: ''}, 
								{title: 'Fax', type: 'tel', value: ''}, 
								{title: 'Email', type: 'email', value: ''}
							];
	$scope.businessFields = [
								{title: 'Name 1', type: 'text', value: ''}, 
								{title: 'Name 2', type: 'text', value: ''}, 
								{title: 'PLZ', type: 'number', value: ''}, 
								{title: 'Ort', type: 'text', value: ''}, 
								{title: 'Straße', type: 'text', value: ''}, 
								{title: 'Hausnummer', type: 'text', value: ''}, 
								{title: 'Zusatz', type: 'text', value: ''}, 
								{title: 'Telefon', type: 'tel', value: ''}, 
								{title: 'Fax', type: 'tel', value: ''}, 
								{title: 'Email', type: 'email', value: ''}
							];
	$scope.addressFields = ['Herr', 'Frau', 'Firma', 'Familie', 'Herr und Frau'];
	$scope.titleFields = ['kein', 'Dr.', 'Prof.', 'Prof. Dr.', 'Dr. Dr.', 'Dipl.-Kfm.', 'Dipl.-Med.', 'Dipl.-Ing.', 'Dr. Ing.', 'MR Dr.', 'OMR Dr.', 'Prof. Dr. Dr.', 'Prof. Dr. Ing.'];
	$scope.offerInfo = {
		customerType: $stateParams.customerType,
		isCalculated: false
	}

    $scope.changeSectionOfferCustomerType = function(s){
    	$scope.offerInfo.customerType = s;
    	$scope.offerInfo.isCalculated = false;
    	$ionicScrollDelegate.resize();
    }
    
     //Changes class of button depending on click for offer calculation
    $scope.changeSectionOfferCalculate = function(s){
    	$scope.offerInfo.isCalculated = true;
    	$ionicScrollDelegate.resize();
    }

})