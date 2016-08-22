var myApp = angular.module('angularApp', []);

myApp.controller('taskThreeController', function($scope, $http) {


    $scope.navCard = [
        'happy',
        'grumpy',
        'sad'
        ];

    $scope.listings = [];
        $http.get('json/listings.json')
           .then(function(response){
                   $scope.listings = response.data;
        });
})