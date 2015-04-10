'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('CVCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $http.get('data/data.json').
      success(function(data) {
        $scope.name = data.person.firstname+" "+data.person.lastname;
        $scope.status = data.person.status;
        $scope.mail = data.person.email;
        $scope.phone = data.person.phone;

        $scope.resume = data.person.apropos;
        $scope.projects = data.projects;
        $scope.skills = data.skills;
        $scope.diplomes = data.diplomes;
      })

  });

