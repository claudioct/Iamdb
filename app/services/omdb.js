(function(){
  var omdbApi = function($http, $q, $log) {
    var baseUrl = "http://www.omdbapi.com/?v1&";

    function httpPromise (url) {
      var deferred = $q.defer();
      $http.get(url)
        .then(function(onSuccess) {
          deferred.resolve(onSuccess.data);
        }, function() {
          deferred.reject();
        });
        return deferred.promise;
    }


    var search = function(query){
      return httpPromise(baseUrl + "s=" + encodeURIComponent(query));
    }

    var find = function(id) {
      return httpPromise(baseUrl + "i=" + id);
    }

    return {
      search: search,
      find: find
    };
  };

  var app = angular.module("iamdbModule");
  app.factory("omdbApi", omdbApi);
}());
