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
                   $scope.listings = response.data;
                   changeReason();

               });

    function changeReason(){
       angular.forEach($scope.listings, function(value,key) {
            if (value.listing.update_reason == 'Listed') {
                     console.log("New " + value.listing.update_reason);
                     value.update_reason.push("New " + $scope.listings.listing.update_reason);
                     console.log($scope.listings.listing.update_reason);
                     }
            else {
                value.listing.update_reason == value.listing.update_reason;
                console.log("not" + value.listing.update_reason);
            }


           });
    };

    //make function that exports either 'financed' or 'cash' key to $scope.strategy

    /*function modifyFinancials() {
            angular.forEach($scope.listings.financials, function(value,key) {
                 // We know it's out of five, so might as well just do that
                for (var i=1; i<=5; i++) {
                    // If the rating is higher than this, it gets a full star
                    if (value >= i) {
                        // Add a full star for this key
                        $scope.ratings[key].push('star');
                    }
                    // If the rating is less than this by 1/2, then a half star
                    else if ( value + 0.5 === i ) {
                        $scope.ratings[key].push('star-half');
                    }
                }
            });
        }

    $scope.property = [];
        $http.get('jsonFiles/property.json')
            .then(function(response){
                    $scope.property = response.data;
            populateRatings();
        });
*/

   // $scope.similarLocation = [],
     //   $http.get('jsonFiles/similarLocation.json')
       //     .then(function(response){
         //           $scope.similarLocation = response.data;
        //});
})