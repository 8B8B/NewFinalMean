'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
  }
]);
<<<<<<< HEAD
=======

// var toggleVisibility = function(element) {
//   if(element.style.display==='block'){
//     element.style.display ='none';
//   } else {
//     element.style.display ='block';
//   }
//};
>>>>>>> timeCompareDev
