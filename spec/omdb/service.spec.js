describe('omdb service', function() {
  var movieData = {"Title":"Rogue One: A Star Wars Story","Year":"2016","Rated":"PG-13","Released":"16 Dec 2016","Runtime":"133 min","Genre":"Action, Adventure, Sci-Fi","Director":"Gareth Edwards","Writer":"Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)","Actors":"Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen","Plot":"The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow.","Language":"English","Country":"USA","Awards":"2 wins & 8 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg","Metascore":"65","imdbRating":"8.1","imdbVotes":"168,065","imdbID":"tt3748528","Type":"movie","Response":"True"};
  var movieDataById = {"Title":"Rogue One: A Star Wars Story","Year":"2016","Rated":"PG-13","Released":"16 Dec 2016","Runtime":"133 min","Genre":"Action, Adventure, Sci-Fi","Director":"Gareth Edwards","Writer":"Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)","Actors":"Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen","Plot":"The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow.","Language":"English","Country":"USA","Awards":"2 wins & 8 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg","Metascore":"65","imdbRating":"8.1","imdbVotes":"168,065","imdbID":"tt3748528","Type":"movie","Response":"True"};
  var omdbApi = {};
  var $httpBackend;

  beforeEach(angular.mock.module('iamdbModule'));
  beforeEach(angular.mock.inject(function(_omdbApi_, _$httpBackend_) {
    omdbApi = _omdbApi_;
    $httpBackend = _$httpBackend_;
  }));

  it('should return search movie data', function() {
    var response;

    var expectedUrl = "http://www.omdbapi.com/?v1&s=rogue%20one";

    // var expectedUrl = function(url) {
    //   return url.indexOf("http://www.omdbapi.comz") !== -1;
    // }

    $httpBackend.when('GET', expectedUrl)
      .respond(200, movieData);

    omdbApi.search('rogue one')
      .then(function(data) {
        response = data;
      });

    $httpBackend.flush();
    expect(response).toEqual(movieData);
  });

  it('should handle error', function() {
    var response;

    var expectedUrl = "http://www.omdbapi.com/?v1&s=rogue%20one";

    $httpBackend.when('GET', expectedUrl)
      .respond(500);

    omdbApi.search('rogue one')
      .then(function(data) {
        response = data;
      })
      .catch(function(){
        response = 'Error!';
      });

    $httpBackend.flush();
    expect(response).toEqual("Error!");
  });

  it('should return movie data by id', function() {
    var response;
        var expectedUrl = 'http://www.omdbapi.com/?v1&i=tt3748528';
    $httpBackend.expect('GET', expectedUrl)
      .respond(200, movieDataById);

    omdbApi.find('tt3748528')
      .then(function(data) {
        response = data;
      });

    $httpBackend.flush();

    expect(response).toEqual(movieDataById);
  });
});
