'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
  }
]);

var toggleVisibility = function(element) {
    if(element.style.visibility=='visible'){
        element.style.visibility='hidden';
    } else {
        element.style.visibility='visible';
    }
};