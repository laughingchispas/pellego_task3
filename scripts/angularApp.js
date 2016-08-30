var myApp = angular.module('angularApp', []);

myApp.controller('taskThreeController', function($scope, $http, $interpolate) {


    $scope.update_date =
        'July 25';

    $scope.currency =
            '$';


    $scope.strategy =
                'financed';

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