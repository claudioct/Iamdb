(function(){
  var app = angular.module("iamdbModule")
  var mainController = function($scope, $log, omdbApi) {
    //$scope.teste = 123;
    var result = {};
    omdbApi.search("rogue one")
      .then(function(onSuccess) {
        $scope.teste = result = onSuccess.data.Search[0];
      }, function(onError) {
        $scope.teste = "Deu ruim";
      });
      $log.info(result);
  }
  app.controller("mainController", mainController);
})();
