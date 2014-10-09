'use strict';

/**
 * @ngdoc function
 * @name ontourApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ontourApp
 */
angular.module('ontourApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
