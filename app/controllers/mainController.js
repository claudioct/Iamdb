(function(){
  var app = angular.module("omdbModule")
  var mainController = function($scope) {
    $scope.teste = 123;
  }

  app.controller("mainController", mainController);
})();
