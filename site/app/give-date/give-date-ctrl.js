(function() {
  var sharedSpaceScienceControllers = angular.module("sharedSpaceScience.controllers");
  sharedSpaceScienceControllers.controller("GiveDateCtrl", ["$scope",
    "$q",
    "Restangular",
    "$location",
    function($scope, $q, Restangular, $location) {

      $scope.format = 'yyyy-MM-dd';

      function cleanDate( date ) {
        date = new Date(date);
        var day = date.getDate();
        if (day < 10 ) {
          day = "0" + day;
        }
        var monthIndex = date.getMonth()+1;
        if (monthIndex < 10) {
          monthIndex = "0" + monthIndex;
        }
        var year = date.getFullYear();
        return year + "-" + monthIndex + "-" + day;
      }

      $scope.today = function() {
        var date = new Date();
        $scope.selectedDate = cleanDate(date);
      };
      $scope.today();
      // $scope.selectedDate = $scope.today();

      $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
      };
      $scope.toggleMin();

      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };

      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };

      $scope.submitDate = function() {
        console.log("Submitting date");
        // $location.url("/get-annotate-images?date="+cleanDate($scope.selectedDate));
        $location.url("/display-images?date="+cleanDate($scope.selectedDate));
      };
      // Restangular.one("").get.then(fu
    }
  ]);
}(this));
