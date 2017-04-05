angular.module('ecoop')

.controller('DeliveryController', function($scope, $ionicHistory, $ionicScrollDelegate, $timeout, $q, ApiService, CONSTANTS)	{


	$scope.data1 = [
		{title: 'NB-Lastprofil', type: 'text', value: ''}, 
		{title: 'Vorjahresverbrauch', type: 'text', value: ''}, 
		{title: 'PLZ der Lieferadresse', type: 'text', value: ''}, 
		{title: 'Tarifname', type: 'text', value: ''}, 
		{title: 'Preisgarantie', type: 'date', value: ''}, 
		{title: 'Dublettencheck ignorieren', type: 'toggle', value: ''}, 
		{title: 'Stichtagabrechnung', type: 'toggle', value: ''}, 
		{title: 'zum 31.', type: 'select', value: '', options: ['Januar', 'Februar', 'März', 'April', 'Mail', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']}
	];

	$scope.data2 = [
		{title: 'NB-Lastprofil', type: 'text', value: ''}, 
		{title: 'Vorjahresverbrauch', type: 'text', value: ''}, 
        {title: 'Lastspitze', type: 'text', value: ''}, 
        {title: 'Blindmehrarbeit', type: 'text', value: ''}, 
        {title: 'Spannungsart', type: 'select', value: '', options: ['Niederspannung', 'Hochspannung']},
		{title: 'PLZ der Lieferadresse', type: 'text', value: ''}, 
		{title: 'Tarifname', type: 'text', value: ''}, 
		{title: 'Vertragslaufzeit', type: 'select', value: '', options: ['12 Monate', '24 Monate', '36 Monate']}, 
		{title: 'Dublettencheck ignorieren', type: 'toggle', value: ''}, 
		{title: 'Stichtagabrechnung', type: 'toggle', value: ''}, 
		{title: 'zum 31.', type: 'select', value: '', options: ['Januar', 'Februar', 'März', 'April', 'Mail', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']}
	];

	$scope.data3 = [
		{title: 'Neueinzug', type: 'date', value: ''}, 
		{title: 'Zählerstand', type: 'number', value: ''}, 
		{title: 'Zählernummer', type: 'text', value: ''}, 
		{title: 'Verteilsnetzbetreiber', type: 'text', value: ''}, 
		{title: 'Verteilsnetzbetreiber BDEW Code', type: 'text', value: ''}, 
		{title: 'Zählpunkt-Bezeichnung', type: 'text', value: ''}, 
		{title: 'Messart', type: 'text', value: ''}, 
		{title: 'Lastgangsprofil', type: 'text'},
		{title: 'Unterschriftsdatum', type: 'date', value: ''}, 
		{title: 'Nächstmöglicher Termin', type: 'toggle', value: ''}, 
		{title: 'Lieferwunschtermin', type: 'date', value: ''}, 
		{title: 'Selbst gekündigt?', type: 'toggle', value: ''}, 
		{title: 'Kündigungstermin', type: 'date', value: ''}, 
	];

	$scope.data4 = [
		{title: 'Vorversorger', type: 'autocomplete', value: ''}, 
		{title: 'Vorlieferant BDEW Code', type: 'text', value: ''}, 
		{title: 'bisherige Kundennummer', type: 'text', value: ''}, 
		{title: 'Zählernummer', type: 'text', value: ''}, 
		{title: 'Verteilsnetzbetreiber', type: 'text', value: ''}, 
		{title: 'Verteilsnetzbetreiber BDEW Code', type: 'text', value: ''}, 
		{title: 'Zählpunkt-Bezeichnung', type: 'text', value: ''}, 
		{title: 'Messart', type: 'text', value: ''}, 
		{title: 'Lastgangsprofil', type: 'text'},
		{title: 'Unterschriftsdatum', type: 'date', value: ''}, 
		{title: 'Nächstmöglicher Termin', type: 'toggle', value: ''}, 
		{title: 'Lieferwunschtermin', type: 'date', value: ''}, 
		{title: 'Selbst gekündigt?', type: 'toggle', value: ''}, 
		{title: 'Kündigungstermin', type: 'date', value: ''}, 
	];




    $scope.clickedValueModel = "";
    var inputChangedPromise;
    $scope.searchSupplier = function (query) {

        var defer = $q.defer();

        if(inputChangedPromise){
            $timeout.cancel(inputChangedPromise);
        }
        inputChangedPromise = $timeout(function() {
            if (query) {

                var energy_type = CONSTANTS.energy_types[$scope.activeSectionTariffEnergyType - 1];
                var name = query;

                ApiService.getSuppliers([energy_type, name]).then(
                    function(resSuccess){
                        if (resSuccess.data instanceof Array){
                            defer.resolve({suppliers: resSuccess.data});
                        }else if(typeof resSuccess.data === 'string'){
                            defer.resolve({suppliers: [{name: resSuccess.data, code: "-1"}]});
                        }
                    }, function(resError){
                        defer.reject(resError);
                    }
                )
            }else{
                defer.resolve({suppliers: []});
            }
        },1000);

        return defer.promise;
    };

    $scope.supplierSelected = function (callback) {
        // $scope.clickedValueModel = callback;
        $scope.data4[1]['value'] = callback['item']['code'];
    };




	$scope.showBillingDueDate = false;
    
     //Changes class of button depending on click for energy type
    $scope.activeSectionTariffEnergyType = 0;
    
    $scope.changeSectionTariffEnergyType = function(s){
        $scope.activeSectionTariffEnergyType = s;
        //Reset value of following buttons
        $scope.activeSectionTariffModelType = 0;
        $scope.activeSectionTariffCustomerType = 0;
        $scope.activeSectionTariffCustomerTypeProfile = 0;
        $scope.activeSectionTariffContractTerm = 0;
        $scope.activeSectionTariffHeatFlowChoice = 0;
        $scope.activeSectionTariffSupplyDetail = 0;
        $ionicScrollDelegate.resize();
    }
    
     //Changes class of button depending on click for tariff model type
    $scope.activeSectionTariffModelType = 0;
    
    $scope.changeSectionTariffModelType = function(s){
        $scope.activeSectionTariffModelType = s;
        //Reset value of following buttons
        $scope.activeSectionTariffCustomerType = 0;
        $scope.activeSectionTariffCustomerTypeProfile = 0;
        $scope.activeSectionTariffContractTerm = 0;
        $scope.activeSectionTariffHeatFlowChoice = 0;
        $scope.activeSectionTariffSupplyDetail = 0;
        $ionicScrollDelegate.resize();
    }
    
     //Changes class of button depending on click for customer type
    $scope.activeSectionTariffCustomerType = 0;
    
    $scope.changeSectionTariffCustomerType = function(s){
        $scope.activeSectionTariffCustomerType = s;
        //Reset value of following buttons
        $scope.activeSectionTariffCustomerTypeProfile = 0;
        $scope.activeSectionTariffContractTerm = 0;
        $scope.activeSectionTariffHeatFlowChoice = 0;
        $scope.activeSectionTariffSupplyDetail = 0;
        $ionicScrollDelegate.resize();
    }
    
     //Changes class of button depending on click for customer type profile (Waermepumpe,SLP,RLM,HT/NT)
    $scope.activeSectionTariffCustomerTypeProfile = 0;
    
    $scope.changeSectionTariffCustomerTypeProfile = function(s){
        $scope.activeSectionTariffCustomerTypeProfile = s;
        //Reset value of following buttons
        $scope.activeSectionTariffContractTerm = 0;
        $scope.activeSectionTariffHeatFlowChoice = 0;
        $scope.activeSectionTariffSupplyDetail = 0;
        $ionicScrollDelegate.resize();
    }
    
    
     //Changes class of button depending on click for contract term
    $scope.activeSectionTariffContractTerm = 0;
    
    $scope.changeSectionTariffContractTerm = function(s){
        $scope.activeSectionTariffContractTerm = s;
        //Reset value of following buttons
        $scope.activeSectionTariffHeatFlowChoice = 0;
        $scope.activeSectionTariffSupplyDetail = 0;
        $ionicScrollDelegate.resize();
    }
    
     //Changes class of button depending on click for heat flow choice
    $scope.activeSectionTariffHeatFlowChoice = 0;
    
    $scope.changeSectionTariffHeatFlowChoice = function(s){
        $scope.activeSectionTariffHeatFlowChoice = s;
        //Reset value of following buttons
        $scope.activeSectionTariffSupplyDetail = 0;
        $ionicScrollDelegate.resize();
    }
    
    
     //Changes class of button depending on click for supply details (moving in, supplier switch)
    $scope.activeSectionTariffSupplyDetail = 0;
    
    $scope.changeSectionTariffSupplyDetail = function(s){
        $scope.activeSectionTariffSupplyDetail = s;
        $ionicScrollDelegate.resize();
    }
})