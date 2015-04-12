(function() {
  var sharedSpaceScienceControllers = angular.module("sharedSpaceScience.controllers");

  sharedSpaceScienceControllers.controller("DisplayImagesCtrl", ["$scope",
    "$q",
    'Restangular',
    '$routeParams',
    function($scope,
      $q,
      Restangular,
      $routeParams) {

      // Restangular.one('images-detailed-with-custom-message.json')
      //   .get().then(function(result) {
      //     $scope.images = result.posts;
      //     $scope.currentIndex = 0;
      //     $scope.currentImage = $scope.images[$scope.currentIndex];
      //   })
      $scope.date = $routeParams.date;
      Restangular.one("apod/pictures").get({
          date: $scope.date
        })
        .then(function(result) {
          $scope.imagesWithTextToBeFilled = result.posts;
          $scope.images = result.posts;
          _.forEach($scope.images, function(currentImage) {
            currentImage.customMessage = currentImage.explanation;
            console.log(currentImage.customMessage);
          });
          $scope.currentIndex = 0;
          $scope.currentImage = $scope.images[$scope.currentIndex];
        });

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
