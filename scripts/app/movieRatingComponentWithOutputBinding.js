/// <reference path="templates/movieRatingComponent.html" />
//Note: Example of a component use as Directive with Output and Input Bindings
(function () {
    "use strict";

    var module = angular.module("demoApp");

    function buildEntries(value, max) {
        var entries = [];

        for (var i = 1; i <= max; i++) {
            var icon = i <= value ? "glyphicon-star" : "glyphicon-star-empty";
            entries.push(icon);
        }

        return entries;
    }


    module.component("movieRatingComponentWithOutputBinding", {
        templateUrl: "scripts/app/templates/movieRatingComponentWithOutputBinding.html",
        bindings: { //here we specify which properties we want to binding
            value: "<", 
            max: "<",
            setRating:"&" //output databinding (the function has to be declare in the parent component)
        },        
        controllerAs: "model",
        controller: function () {
            var model = this;

            model.$onInit = function () {
                model.entries = buildEntries(model.value, model.max);
            };

            //this is a built-in angular event that is triggered when any change on the bindings properties is made
            model.$onChanges = function () {
                model.entries = buildEntries(model.value, model.max);
            };
        }

    });

}());