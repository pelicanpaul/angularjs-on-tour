/**
 * Created by Paul on 10/2/2014.
 */
var imdbApp = angular.module('imdbApp', ['ngRoute', 'ngResource']);
imdbApp.factory('imdbApi', ['$resource', function ($resource) {
    return $resource('https://api.github.com/search/repositories?q=:q&per_page=:perPage&page=:page');
}]);

imdbApp.controller('SearchController', ['$scope', 'imdbApi', '$http', function ($scope, imdbApi, $http) {
    $scope.page = 1;
    $scope.numPerPage = 10;
    $scope.query = 'query';

    $scope.search = function () {
        alert('asdf');
        $http.get('https://api.github.com/search/repositories?q=:q&per_page=:perPage&page=:page').success(function (data) {

            $scope.repos = data;


        });
    }]);