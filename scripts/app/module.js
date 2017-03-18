(function() {
    "use strict";

    var module = angular.module("demoApp", ['ngRoute']);

    //Routing Configuration (Original Angular Routing engine)
    module.config(function($routeProvider) {
        $routeProvider
            .when("/list", { template: "<movie-list></movie-list>" }) //we put the component tag as the tempalte of the route
            .when("/about", { template: "<app-about></app-about>" })
            .otherwise({ redirectTo: "/list" });

    });

    module.component("appAbout", { template: "This is the about page" });

}());