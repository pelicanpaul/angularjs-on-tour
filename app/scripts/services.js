'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var ontourServices = angular.module('ontourApp.services', ['ngResource']);

ontourServices.factory('Artists', ['$resource',
    function($resource){
        return $resource('../data/artists.json', {}, {
            query: {method:'GET', params:{artistName:'artists'}, isArray:true}
        });
    }]);




