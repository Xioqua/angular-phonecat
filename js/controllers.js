var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope,$http) {
   $http.get('../json/phone.json').then(function(result) { 
     $scope.phones = result.data;
    });
    $scope.orderProp = 'age';
  });