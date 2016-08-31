var myApp = angular.module('angularAppRethinking', []);

myApp.controller('taskThreeControllerRethinking', function($scope, $http) {

    $scope.strategy =
                'financed';

    $scope.houseSpecs = {
            rooms: 3,
            bath: 2,
            surfaceArea: 1772
    };


              //  $scope.name = 'John';
               // $scope.message = $interpolate('Hello {{name}}')($scope);

    $scope.listings = [];
    $http.get('json/listings.json')
               .then(function(response){
                 angular.forEach(response.data, function(value,key) {
                    value.financials.hold_strategy_cashin_net = value.financials.hold_financed_cashin_net;
                    value.financials.hold_strategy_cashflow = value.financials.hold_financed_cashflow;
                    value.financials.brrr_strategy_cashflow = value.financials.brrr_financed_cashflow;

                    if (value.listing.update_reason == 'Listed') {
                        value.listing.update_reason = "New Listing";
                    }
                    else {}
                 });

                 $scope.listings = response.data;
               });

})