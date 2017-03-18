/// <reference path="templates/movieRatingComponent.html" />
//Note: Component use as a directive
(function () {
    "use strict";

    var module = angular.module("demoApp");

    module.component("movieRating", {
        templateUrl: "scripts/app/templates/movieRatingComponent.html",
        bindings: { //here we specify which properties we want to binding
            value: "<" //that symbol means that that property will be set from the outside as a attribute in the component
        },
        transclude: true, //this means that content can be put inside our component (tag html) and we will display that html in the component
        controllerAs: "model",
        controller: function () {
            var model = this;

            model.$onInit = function () {
                model.entries = new Array(model.value);
            };

            //this is a built-in angular event that is triggered when any change on the bindings properties is made
            model.$onChanges = function () {
                model.entries = new Array(model.value);
            };
        }

    });

}());