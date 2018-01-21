angular.
  module('phonecatApp').
  component('phoneList', {
  template:
    '<ul class="phones">' +
      '<li ng-repeat="phone in phones | filter:query | orderBy:orderProp" class="thumbnail">' +
            '<a href="#/phone/{{ phone.id }}" class="thumb">' +
                '<img ng-src="{{ phone.imageUrl }}">' +
            '</a>' +
            '<a href="#/phones/{{ phone.id }}">' +
                '{{phone.name}}'+
            '</a>' +
        '<p>{{phone.snippet}}</p>' +
      '</li>' +
    '</ul>',
  controller: function PhoneListController($scope,$http) {
    $http.get('../json/phone.json').then(function(result) { 
      $scope.phones = result.data;
     });
     $scope.orderProp = 'age';
  }
})