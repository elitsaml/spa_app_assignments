(function() {
  'use strict';

  angular.module('LunchCheck', [ ])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']
  function LunchCheckController( $scope){
    console.log("LunchCheckController loading...");

    $scope.checkItems = function () {

      if ($scope.lunchItems==null){
        $scope.lunchMessage =  "Please enter data first";
        return;
      }

      var lItems = $scope.lunchItems.trim().split(',');

      if (lItems.length <= 0 || ! lItems[0]) {
        $scope.lunchMessage =  "Please enter data first";
        return;
      }
      if (lItems.length <= 3) {
        $scope.lunchMessage = "Enjoy!";
        return;
      }
      $scope.lunchMessage = "Too much!";
    }

  }

}());
