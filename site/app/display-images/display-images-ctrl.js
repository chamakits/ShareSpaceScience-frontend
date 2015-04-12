(function() {
  var sharedSpaceScienceControllers = angular.module("sharedSpaceScience.controllers");

  sharedSpaceScienceControllers.controller("DisplayImagesCtrl", ["$scope",
    "$q",
    'Restangular',
    function($scope,
      $q,
      Restangular) {

      Restangular.one('images-detailed-with-custom-message.json')
        .get().then(function(result) {
          $scope.images = result.posts;
          $scope.currentIndex = 0;
          $scope.currentImage = $scope.images[$scope.currentIndex];
        })

      console.log("DisplayImagesCtrl!");
      // $scope.currentImage = {
      //   url:"http:\/\/apod.nasa.gov\/apod\/image\/1205\/snowtrees_bonfadini_960.jpg",
      //   customMessage:"Hurray!"
      // }
      $scope.previousPicture = function() {
        if ($scope.currentIndex <= 0) {
          $scope.currentIndex = $scope.images.length - 1;
        } else {
          $scope.currentIndex = $scope.currentIndex - 1;
        }
        $scope.currentImage = $scope.images[$scope.currentIndex];
      };
      $scope.nextPicture = function() {
        if ($scope.currentIndex >= $scope.images.length - 1) {
          $scope.currentIndex = 0;
        } else {
          $scope.currentIndex = $scope.currentIndex + 1;
        }
        $scope.currentImage = $scope.images[$scope.currentIndex];
      };
    }
  ]);
}(this));
