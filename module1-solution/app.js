(function() {
  'use strict';

  angular.module('LunchCheck', [ ])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']
  function LunchCheckController( $scope){
    console.log("LunchCheckController loading...");

    $scope.checkItems = function () {

      if ( ! $scope.lunchItems){
        $scope.lunchMessage =  "Please enter data first";
        return;
      }

      $scope.lunchMessage = $scope.lunchItems.trim().split(',').length <= 3 ?  "Enjoy!" : "Too much!";
    }

  }

}());
