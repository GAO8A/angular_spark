'use strict';

/**
 * @ngdoc function
 * @name angularSparkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSparkApp
 */
angular.module('angularSparkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
