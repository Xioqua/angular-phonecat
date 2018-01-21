var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope,$http) {
   $http.get('../json/phone.json').then(function(result) { 
    //  $scope.phones = result.data;
     $scope.phones = result.data.splice(0, 5);
    });
    $scope.orderProp = 'age';
  });