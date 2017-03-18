
//Example of a COUPLED Component with other component (accordion)
(function () {
    "use strict";

    var module = angular.module("demoApp");

    module.component("accordionPanel", {
        bindings: {
            "heading":"@" //@ means attribute binding, but the value of the attr will be treated as literal not an expression.
        },
        require: {
            "parent": "^accordion" //this means that this component required a controller that will be set in the controller of this component with the name of "parent" (in this case angular will look in the  hierarchy of component try to find a component called accordion)
                                    // the ^ symbol means that there is a parent component
        },
        controllerAs: "model",
        controller: function() {
            var model = this;
            model.selected = false;

            model.$onInit = function() {
                model.parent.addPanel(model); // all the methods and attrs on the accordion controller will be avaialable in the parent property
            };

            model.turnOn = function() {
                model.selected = true;
            };

            model.turnOff = function () {
                model.selected = false;
            };

            model.select = function() {
                model.parent.selectPanel(model);
            };

        },
        transclude: true,
        template: "<div class='panel panel-default'>" +
                    "<div class='panel-heading' ng-click='model.select()'>" +
                        "<h4 class='panel-title'>{{ model.heading }}</h4>" +
                    "</div>" +
                        "<div ng-if='model.selected' class='panel-body' ng-transclude>" +
                        "</div>" +
                    "</div>"

    });

}());