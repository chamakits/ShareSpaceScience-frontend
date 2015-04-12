(function(that) {
  var sharedSpaceScienceApp = angular.module("sharedSpaceScienceApp", ["sharedSpaceScience.controllers",
    "angular-carousel",
    "ngResource", "ngRoute"
  ]);

  function MenuLinks(template, controller, link, text) {
    this.template = template;
    this.controller = controller;
    this.link = link;
    this.text = text;
  };
  that.MenuLinks = MenuLinks;

  var sharedSpaceScienceControllers = angular.module("sharedSpaceScience.controllers", []);

  var links = [
    new MenuLinks("/app/give-date/give-date-part.html",
      "GiveDateCtrl", "/give-date", "Giving date"),
    new MenuLinks("/app/get-annotate-images/get-annotate-images-part.html",
      "GetAnnotateImagesCtrl", "/get-annotate-images", "Getting images and annotating"),
    new MenuLinks("/app/display-images/display-images-part.html",
      "DisplayImagesCtrl", "/display-images", "Display Images"),
  ];

  console.log(links);

  sharedSpaceScienceControllers.controller("MenuController", ["$scope", function($scope) {
    $scope.headers = links;
  }]);

  sharedSpaceScienceApp.config(["$routeProvider", function($routeProvider) {
    console.log("Providing route");
    console.log(links);
    var routeProvider = $routeProvider;
    _.forEach(links, function(link) {
      console.log("Setting links.");
      routeProvider = routeProvider.when(link.link, {
        templateUrl: link.template,
        controller: link.controller
      });
    });
    routeProvider.otherwise({
      redirectTo: "/"
    });

  }]);

  // sharedSpaceScienceControllers.controller("")

}(this));
