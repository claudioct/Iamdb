(function(){
  var app = angular.module("iamdbModule")
  var mainController = function($scope,omdbApi) {
    //$scope.teste = 123;
    $scope.teste = omdbApi.search('title').Title;
  }

  app.controller("mainController", mainController);


})();
