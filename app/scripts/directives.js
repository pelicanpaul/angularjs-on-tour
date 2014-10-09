'use strict';

/* Directives */


angular.module('ontourApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).directive('appBike', ['bike', function(bike) {
        return function(scope, elm, attrs) {
            elm.text(bike);
        };
    }]).directive('appSecond', function(step) {
        return function(scope, elm, attrs) {
            elm.text(step);
        };
    });
