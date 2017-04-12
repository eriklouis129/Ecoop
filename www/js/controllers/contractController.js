angular.module('ecoop')

.controller('ContractController', function($scope, $ionicHistory, $ionicScrollDelegate, $q, $timeout, ApiService)	{

	$scope.cities = [];

	$scope.personalDataPrivateFields = [
		{title: 'Anrede', type: 'select', value: '', options: ['kein', 'Herr', 'Frau', 'Firma', 'Familie', 'Herr und Frau']}, 
		{title: 'Titel', type: 'select', value: '', options: ['kein', 'Dr.', 'Prof.', 'Prof. Dr.', 'Dr. Dr.', 'Dipl.-Kfm.', 'Dipl.-Med.', 'Dipl.-Ing.', 'Dr. Ing.', 'MR Dr.', 'OMR Dr.', 'Prof. Dr. Dr.', 'Prof. Dr. Ing.']}, 
		{title: 'Vorname', type: 'text', value: ''}, 
		{title: 'Nachname', type: 'text', value: ''}, 
		{title: 'Geburtstag', type: 'date', value: ''}, 
		{title: 'Postleitzahl', type: 'zip', value: ''}, 
		{title: 'Ort', type: 'cities', value: '', options: $scope.cities}, 
		{title: 'Kreis', type: 'text', value: ''}, 
		{title: 'Straße', type: 'autocomplete', value: ''}, 
		{title: 'Hausnummer', type: 'text', value: ''}, 
		{title: 'Zusatz', type: 'text', value: ''}, 
		{title: 'Telefon', type: 'tel', value: ''}, 
		{title: 'Fax', type: 'tel', value: ''}, 
		{title: 'Email', type: 'email', value: ''}
	];
	$scope.personalDataBusinessFields = [
		{title: 'Name 1', type: 'text', value: ''}, 
		{title: 'Name 2', type: 'text', value: ''}, 
		{title: 'Ansprechpartner Anrede', type: 'select', value: '', options: ['kein', 'Herr', 'Frau', 'Firma', 'Familie', 'Herr und Frau']}, 
		{title: 'Ansprechpartner Titel', type: 'select', value: '', options: ['kein', 'Dr.', 'Prof.', 'Prof. Dr.', 'Dr. Dr.', 'Dipl.-Kfm.', 'Dipl.-Med.', 'Dipl.-Ing.', 'Dr. Ing.', 'MR Dr.', 'OMR Dr.', 'Prof. Dr. Dr.', 'Prof. Dr. Ing.']}, 
		{title: 'Ansprechpartner Vorname', type: 'text', value: ''}, 
		{title: 'Ansprechpartner Nachname', type: 'text', value: ''}, 
		{title: 'Postleitzahl', type: 'zip', value: ''}, 
		{title: 'Ort', type: 'cities', value: '', options: $scope.cities}, 
		{title: 'Kreis', type: 'text', value: ''}, 
		{title: 'Straße', type: 'autocomplete', value: ''}, 
		{title: 'Hausnummer', type: 'text', value: ''}, 
		{title: 'Zusatz', type: 'text', value: ''},
		{title: 'Telefon', type: 'tel', value: ''},
		{title: 'Fax', type: 'tel', value: ''},
		{title: 'Email', type: 'email', value: ''},
	];
	

	$scope.personalTypePrivateFields = [
		{title: 'Anrede', type: 'select', value: '', options: ['kein', 'Herr', 'Frau', 'Firma', 'Familie', 'Herr und Frau']}, 
		{title: 'Titel', type: 'select', value: '', options: ['kein', 'Dr.', 'Prof.', 'Prof. Dr.', 'Dr. Dr.', 'Dipl.-Kfm.', 'Dipl.-Med.', 'Dipl.-Ing.', 'Dr. Ing.', 'MR Dr.', 'OMR Dr.', 'Prof. Dr. Dr.', 'Prof. Dr. Ing.']}, 
		{title: 'Vorname', type: 'text', value: ''}, 
		{title: 'Nachname', type: 'text', value: ''}, 
		{title: 'PLZ', type: 'number', value: ''}, 
		{title: 'Ort', type: 'text', value: ''}, 
		{title: 'Straße', type: 'text', value: ''}, 
		{title: 'Hausnummer', type: 'text', value: ''}, 
		{title: 'Zusatz', type: 'text', value: ''}, 
		{title: 'Postfach', type: 'text', value: ''},
	];
	$scope.personalTypeBusinessFields = [
		{title: 'Ansprechpartner Anrede', type: 'select', value: '', options: ['Firma']}, 
		{title: 'Name 1', type: 'text', value: ''}, 
		{title: 'Name 2', type: 'text', value: ''}, 
		{title: 'PLZ', type: 'number', value: ''}, 
		{title: 'Ort', type: 'text', value: ''}, 
		{title: 'Straße', type: 'text', value: ''}, 
		{title: 'Hausnummer', type: 'text', value: ''}, 
		{title: 'Zusatz', type: 'text', value: ''},
		{title: 'Postfach', type: 'text', value: ''},
	];


	$scope.deliveryAddressPrivateFields = [
		{title: 'Anrede', type: 'select', value: '', options: ['kein', 'Herr', 'Frau', 'Firma', 'Familie', 'Herr und Frau']}, 
		{title: 'Titel', type: 'select', value: '', options: ['kein', 'Dr.', 'Prof.', 'Prof. Dr.', 'Dr. Dr.', 'Dipl.-Kfm.', 'Dipl.-Med.', 'Dipl.-Ing.', 'Dr. Ing.', 'MR Dr.', 'OMR Dr.', 'Prof. Dr. Dr.', 'Prof. Dr. Ing.']}, 
		{title: 'Vorname', type: 'text', value: ''}, 
		{title: 'Nachname', type: 'text', value: ''}, 
		{title: 'PLZ', type: 'number', value: ''}, 
		{title: 'Ort', type: 'text', value: ''}, 
		{title: 'Straße', type: 'text', value: ''}, 
		{title: 'Hausnummer', type: 'text', value: ''}, 
		{title: 'Zusatz', type: 'text', value: ''}
	];
	$scope.deliveryAddressBusinessFields = [
		{title: 'Name 1', type: 'text', value: ''}, 
		{title: 'Name 2', type: 'text', value: ''}, 
		{title: 'PLZ', type: 'number', value: ''}, 
		{title: 'Ort', type: 'text', value: ''}, 
		{title: 'Straße', type: 'text', value: ''}, 
		{title: 'Hausnummer', type: 'text', value: ''}, 
		{title: 'Zusatz', type: 'text', value: ''},
	];


	var inputChangedPromise;
    $scope.searchCitiesByZip = function (query, type) {

        if(inputChangedPromise){
            $timeout.cancel(inputChangedPromise);
        }
        inputChangedPromise = $timeout(function() {
            if (query) {

                ApiService.getCitiesByZip([query]).then(
                    function(resSuccess){
                    	var fields = type == 1 ? $scope.personalDataPrivateFields: $scope.personalDataBusinessFields;
		            	fields.forEach(function(item){
		            		if (item['type'] == 'cities')
		            			item['options'] = resSuccess.data;
		            	})
                    }, function(resError){
                    }
                )
            }
        },1000);

    };

    $scope.searchStreet = function (query, type) {

        var defer = $q.defer();

        if(inputChangedPromise){
            $timeout.cancel(inputChangedPromise);
        }
        inputChangedPromise = $timeout(function() {
            if (query) {

                var zip_code;
                var fields = type == 1 ? $scope.personalDataPrivateFields: $scope.personalDataBusinessFields;
            	fields.forEach(function(item){
            		if (item['title'] == 'Postleitzahl')
            			zip_code = item['value'];
            	})

                var name = query;

                ApiService.getStreets([zip_code, name]).then(
                    function(resSuccess){
                        if (resSuccess.data instanceof Array){
                            defer.resolve({streets: resSuccess.data});
                        }else if(typeof resSuccess.data === 'string'){
                            defer.resolve({streets: [{name: resSuccess.data, code: "-1"}]});
                        }
                    }, function(resError){
                        defer.reject(resError);
                    }
                )
            }else{
                defer.resolve({streets: []});
            }
        },1000);

        return defer.promise;
    };

    // $scope.supplierSelected = function (callback) {
    //     // $scope.clickedValueModel = callback;
    //     $scope.data4[1]['value'] = callback['item']['code'];
    // };





	$scope.showContractSearchForm = false;
    
     //Changes class of button depending on click for customer type
    $scope.activeSectionContractCustomerType = 0;
    
    $scope.changeSectionContractCustomerType = function(s){
        $scope.activeSectionContractCustomerType = s;
        //Resets value of following buttons to 0
        $scope.activeSectionDifferentBillingAddress = 0;
        $scope.activeSectionDifBilAddCustomerType = 0;
        // $scope.activeSectionDeliveryCustType = 0;
        $ionicScrollDelegate.resize();
    }
    
     //Changes class of button depending on click for different billing address
    $scope.activeSectionDifferentBillingAddress = 0;
    
    $scope.changeSectionDifferentBillingAddress = function(s){
        $scope.activeSectionDifferentBillingAddress = s;
        //Resets value of following buttons to 0
        $scope.activeSectionDifBilAddCustomerType = 0;
        // $scope.activeSectionDeliveryCustType = 0;
        $ionicScrollDelegate.resize();
    }
    
     //Changes class of button depending on click for customer type when different billing address is yes
    $scope.activeSectionDifBilAddCustomerType = 0;
    
    $scope.changeSectionDifBilAddCustomerType = function(s){
        $scope.activeSectionDifBilAddCustomerType = s;
         //Resets value of following buttons to 0
        // $scope.activeSectionDeliveryCustType = 0;
        $ionicScrollDelegate.resize();
    }
    
     //Changes class of button depending on click for delivery address customer type 
    // $scope.activeSectionDeliveryCustType = 0;
    
    // $scope.changeSectionDeliveryCustType = function(s){
    //     $scope.activeSectionDeliveryCustType = s;
    //     $ionicScrollDelegate.resize();
    // }
})