'use strict';

/**
 * @ngdoc function
 * @name ontourApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ontourApp
 */
angular.module('ontourApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
