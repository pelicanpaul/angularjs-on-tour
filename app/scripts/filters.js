'use strict';

/* Filters */

angular.module('ontourApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]).filter('encode', function() {
        return function(input) {
            return encodeURIComponent(input);
        };
    });
