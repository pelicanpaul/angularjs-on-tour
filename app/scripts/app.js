'use strict';


// Declare app level module which depends on filters, and services
angular.module('ontourApp', [
    'ngRoute',
    'ontourApp.filters',
    'ontourApp.services',
    'ontourApp.directives',
    'ontourApp.controllers'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'views/home.html', controller: 'Home'});
        $routeProvider.when('/contact', {templateUrl: 'views/contact.html', controller: 'Contact'});
        $routeProvider.when('/find-shows', {templateUrl: 'views/find-shows.html', controller: 'FindShows'});
        $routeProvider.when('/tour-dates/:artistName', {title: 'Band Schedules', templateUrl: 'views/bands-in-town.html', controller: 'TourDates'});
        $routeProvider.otherwise({redirectTo: '/home'});

    }]).run(function ($rootScope) {
        $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
            document.title = currentRoute.title;
        });
    });
