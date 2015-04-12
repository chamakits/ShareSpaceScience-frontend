(function(that) {
  var sharedSpaceScienceApp = angular.module("sharedSpaceScienceApp", ["sharedSpaceScience.controllers",
    // "angular-carousel",
    "ngResource",
    "ngRoute",
    "restangular"
  ]);

  function MenuLinks(template, controller, link, text) {
    this.template = template;
    this.controller = controller;
    this.link = link;
    this.text = text;
  };
  that.MenuLinks = MenuLinks;

  var sharedSpaceScienceControllers = angular.module("sharedSpaceScience.controllers", ['ui.bootstrap']);

  var links = [
    new MenuLinks("/app/give-date/give-date-part.html",
      "GiveDateCtrl", "/give-date", "Giving date"),
    new MenuLinks("/app/get-annotate-images/get-annotate-images-part.html",
      "GetAnnotateImagesCtrl", "/get-annotate-images", "Getting images and annotating"),
    new MenuLinks("/app/display-images/display-images-part.html",
      "DisplayImagesCtrl", "/display-images", "Display Images"),
  ];

  console.log(links);

  sharedSpaceScienceControllers.controller("MenuController", ["$scope",
    function($scope) {
      $scope.headers = links;
    }
  ]);

  sharedSpaceScienceApp.config(["$routeProvider", 'RestangularProvider',
    function($routeProvider, RestangularProvider) {
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

      //CHANGE HERE
      // RestangularProvider.setBaseUrl("/mocks/");
      RestangularProvider.setBaseUrl("http://104.236.3.173:8080/")

    }
  ]);

  // sharedSpaceScienceControllers.controller("")

}(this));
