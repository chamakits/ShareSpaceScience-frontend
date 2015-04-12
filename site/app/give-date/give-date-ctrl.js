(function() {
  var sharedSpaceScienceControllers = angular.module("sharedSpaceScience.controllers");
  sharedSpaceScienceControllers.controller("GiveDateCtrl", ["$scope",
    "$q",
    "Restangular",
    "$location",
    function($scope, $q, Restangular, $location) {

      $scope.format = 'yyyy-MM-dd';

      $scope.today = function() {
        // $scope.selectedDate = new Date();
        // From http://stackoverflow.com/a/3552493/537028
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        var date = new Date();
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var monthName = monthNames[monthIndex];
        var year = date.getFullYear();

        console.log(day, monthNames[monthIndex], year);

        $scope.selectedDate = year + "-" + monthIndex + "-" + day;
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
        $location.url("/get-annotate-images?date="+$scope.selectedDate);
      };
      // Restangular.one("").get.then(fu
    }
  ]);
}(this));
