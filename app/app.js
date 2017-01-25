(function(){
  var app = angular.module("omdbModule", [])
                   .factory('omdbApi', function omdbApiFactory() {
                     return {
                       search: function() {
                         // logic to get data
                         return movieData;
                       }
                     }
                   });
})();
