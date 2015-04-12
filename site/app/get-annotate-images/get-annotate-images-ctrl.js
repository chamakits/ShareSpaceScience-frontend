(function() {
  var sharedSpaceScienceControllers = angular.module("sharedSpaceScience.controllers");
  sharedSpaceScienceControllers.controller("GetAnnotateImagesCtrl", ["$scope",
    "$q",
    "Restangular",
    function($scope, $q, Restangular) {

      Restangular.all("imagesWithoutText.json").getList().then(function(imagesWithText) {
        $scope.imagesWithText = imagesWithText;
      });
    }
  ]);
}(this));
