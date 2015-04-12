(function() {
  var sharedSpaceScienceControllers = angular.module("sharedSpaceScience.controllers");
  sharedSpaceScienceControllers.controller("GetAnnotateImagesCtrl", ["$scope",
    "$q",
    "Restangular",
    "$routeParams",
    function($scope, $q, Restangular, $routeParams) {

      $scope.date = $routeParams.date;
      // Restangular.one("images-detailed.json").get().then(function(imagesWithText) {
      //   $scope.imagesWithText = imagesWithText.posts;
      // });
      Restangular.one("apod/pictures").get({date:$scope.date}).then(function(imagesWithText) {
        $scope.imagesWithTextToBeFilled = imagesWithText.posts;
      });
    }
  ]);
}(this));
