'use strict';

/* Controllers */

/* 
Author: Paul Lyons
Date: 9/10/2014
Demonstration of AngularJS Controller 
**/

angular.module('ontourApp.controllers', []).controller('GlobalNav', ['$scope', '$http', function ($scope, $http) {

    $http.get('data/artists.json').success(function (data) {
        $scope.artists = data;

        $scope.preventHref = function (event) {
            event.stopPropagation();
        };
    });
}]).controller('Footer', ['$scope', '$http', function ($scope, $http) {

    $scope.justCall = function () {
        alert('I am not sure why you would want to go to those sites. All the good content is here!');

    }

}])
    .controller('Home', ['$scope', '$routeParams', '$rootScope', '$http', 'Artists', function ($scope, $routeParams, $rootScope, $http, Artists) {
        $http.get('data/artists.json').success(function (data) {
            $scope.artists = data;
        });

       $scope.artists2 = Artists.query();

        $rootScope.title = 'Upcoming Tour Dates - Featured Artists';

    }]).controller('Contact', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
        $rootScope.title = 'Contact Us';

        $http.get('data/locations/countries.json').success(function (data) {
            $scope.Countries = data;
        });

        $http.get('data/locations/states-us.json').success(function (data) {
            $scope.USstates = data.states;
        });


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

    }]).controller('FindShows', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
        $rootScope.title = 'Find Shows';

        $http.jsonp('http://api.bandsintown.com/artists/' + artist + '/events.json?api_version=2.0&app_id=pelicanpaul&callback=JSON_CALLBACK').success(function (data) {
            $scope.schedule = data;
        });

        $scope.quantity = 20;

    }]).controller('TourDates', ['$scope', '$rootScope', '$http', '$location', function ($scope, $rootScope, $http, $location) {

        var artist = $location.search()['artist'];

        $scope.showDetails = false;

        $scope.queryArtist = artist;
        $http.get('data/artists.json').success(function (data) {
            $scope.artists = data;
            angular.forEach($scope.artists, function (item) {
                var artistName = item.artistName;
                if (artistName === artist) {
                    $scope.artistimage = 'images/artists/' + item.artistImage;

                }
            });
        });


        $scope.title = artist;

        $rootScope.title = artist + ' - Upcoming Tour Dates';

        $http.jsonp('http://api.bandsintown.com/artists/' + artist + '/events.json?api_version=2.0&app_id=pelicanpaul&callback=JSON_CALLBACK').success(function (data) {
            $scope.schedule = data;
        });

        $scope.quantity = 20;


    }]);


//data/bands.json
