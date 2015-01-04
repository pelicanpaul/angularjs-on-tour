'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var ontourServices = angular.module('ontourApp.services', ['ngResource']);

ontourServices.factory('Artists', ['$resource',
    function($resource){
        return $resource('../app/data/artists.json', {}, {
            query: {method:'GET', isArray:true}
        });
    }]);

ontourServices.factory('ArtistDetail', ['$resource',
    function($resource){
        return $resource('../app/data/artists.json', {}, {
            query: {method:'GET', params:{artistName: 'artistName'}, isArray:true}
        });
    }]);

ontourServices.factory('Countries', ['$resource',
    function($resource){
        return $resource('../app/data/locations/countries.json', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]);

ontourServices.factory('States', ['$resource',
    function($resource){
        return $resource('../app/data/locations/states-us.json', {}, {
            query: {method:'GET', params:{}, isArray:false}
        });
    }]);






