angular.module('ecoop')

    .factory('ApiService', function($window, $http, $ionicLoading, API_ENDPOINT, StringService){

        var _headers = {
                            'Content-Type': 'application/json',
                            'API-KEY': API_ENDPOINT.api_key
                        }

        var getSuppliers = function(params)
        {
            var _url = StringService.getURL(API_ENDPOINT.suppliers, params);

            $ionicLoading.show({template: 'Loading...'});

            return $http({
                url: _url,
                headers: _headers,
                method: 'GET'
            })
            .success(function(success){
                $ionicLoading.hide();
                console.log('----- success getSuppliers -----')
                console.log(success)
            })
            .error(function(error){
                $ionicLoading.hide();
                console.log('----- failed getSuppliers -----')
                console.log(error)
            })
        };

        var getCitiesByZip = function(params)
        {
            var _url = StringService.getURL(API_ENDPOINT.cities, params);

            $ionicLoading.show({template: 'Loading...'});

            return $http({
                url: _url,
                headers: _headers,
                method: 'GET'
            })
            .success(function(success){
                $ionicLoading.hide();
                console.log('----- success getCities -----')
                console.log(success)
            })
            .error(function(error){
                $ionicLoading.hide();
                console.log('----- failed getCities -----')
                console.log(error)
            })
        };

        var getStreets = function(params)
        {
            var _url = StringService.getURL(API_ENDPOINT.streets, params);

            $ionicLoading.show({template: 'Loading...'});

            return $http({
                url: _url,
                headers: _headers,
                method: 'GET'
            })
            .success(function(success){
                $ionicLoading.hide();
                console.log('----- success getStreets -----')
                console.log(success)
            })
            .error(function(error){
                $ionicLoading.hide();
                console.log('----- failed getStreets -----')
                console.log(error)
            })
        };

        return {
            getSuppliers:       getSuppliers,
            getCitiesByZip:     getCitiesByZip,
            getStreets:         getStreets

        };
    })

