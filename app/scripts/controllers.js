'use strict';

/* Controllers */

/* 
Author: Paul Lyons
Date: 9/10/2014
Demonstration of AngularJS Controllers
**/

angular.module('ontourApp.controllers', [])
    /*global nav*/
    .controller('GlobalNav', ['$scope', 'Artists', function ($scope, Artists) {

    $scope.artists = Artists.query();

        $scope.preventHref = function (event) {
            event.stopPropagation();
        };

}])

    /*footer*/
    .controller('Footer', ['$scope', function ($scope) {

    $scope.justCall = function () {
        alert('I am not sure why you would want to go to those sites. All the good content is here!');

    }

}])

    /*home*/
    .controller('Home', ['$scope', '$routeParams', '$rootScope', 'Artists',
        function ($scope, $routeParams, $rootScope, Artists) {

        $scope.artists = Artists.query();
        $scope.pageTitle = 'Featured Artists';
        $rootScope.title = 'Upcoming Tour Dates - Featured Artists';

    }])

    /*contact*/
    .controller('Contact', ['$scope', '$rootScope', '$http', 'Countries', 'States',
        function ($scope, $rootScope, $http, Countries, States) {

        $rootScope.title = 'Contact Us';
        $scope.countries = Countries.query();
        $scope.USstates = States.query();

        $scope.master = {};

        $scope.update = function (user) {
            $scope.master = angular.copy(user);

            $scope.processForm = function () {
                $http({
                    method: 'POST',
                    url: 'utilities/send-mail.php',
                    data: $.param($scope.master),  // pass in data as strings
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                })
                    .success(function (data) {
                        $scope.message = data;

                        if (!data.success) {
                            // if not successful, bind errors to error variables
                            $scope.errorName = data.errors.name;

                        } else {
                            // if successful, bind success message to message
                            $scope.message = "Success! ";
                        }
                    });
            };


        };

    }])

    /*find shows*/
    .controller('FindShows', ['$scope', '$http', '$rootScope',
        function ($scope, $http, $rootScope) {
        $rootScope.title = 'Find Shows';

        $http.jsonp('http://api.bandsintown.com/artists/' + artist + '/events.json?api_version=2.0&app_id=pelicanpaul&callback=JSON_CALLBACK').success(function (data) {
            $scope.schedule = data;
        });

        $scope.quantity = 20;

    }]).controller('TourDates', ['$scope','$rootScope', '$routeParams', '$http', '$location', 'Artists',
        function ($scope, $rootScope, $routeParams, $http, $location, Artists) {


        var artist = $routeParams.artistName;

        $scope.showDetails = false;
        $scope.queryArtist = artist;

        $scope.artists = Artists.query();


        $scope.title = artist;

        $rootScope.title = artist + ' - Upcoming Tour Dates';

        $http.jsonp('http://api.bandsintown.com/artists/' + artist + '/events.json?api_version=2.0&app_id=pelicanpaul&callback=JSON_CALLBACK').success(function (data) {
            $scope.schedule = data;
        });

        $scope.quantity = 20;


    }]);


//data/bands.json
