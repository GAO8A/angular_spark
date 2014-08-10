'use strict';

/**
 * @ngdoc function
 * @name angularSparkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSparkApp
 */
angular.module('angularSparkApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
