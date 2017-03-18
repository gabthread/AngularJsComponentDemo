//Note: Component used as controller + template
(function () {
    "use strict";

    var module = angular.module("demoApp");

    function fetchMovies($http) {
        return $http.get("/movies.json").then(function(response) {
            return response.data;
        });
    }

    function controller($http) {

        var model = this;
        model.movies = [];

        //This is a built-in angular event that is triggered when the controller of the component is instantiate
        //typically we put here the calls to the api to fetch data
        model.$onInit = function() {
            fetchMovies($http).then(function(movies) {
                model.movies = movies;
            });
        };

        //Method for movieRatingComponentWithOutputBinding Component
        model.setRating = function(movie, newRating) {
            movie.rating = newRating;
        };

        model.upRating = function(movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };

        model.downRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        };
    }

    //Component Declaration
    module.component("movieList", {
        templateUrl: "scripts/app/templates/movieListComponent.html",
        controllerAs: "model",
        controller: ["$http",controller]

    });


}());