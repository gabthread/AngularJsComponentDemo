
//Example of a COUPLED Component with other component (accordionPanel)
(function () {
    "use strict";

    var module = angular.module("demoApp");

    module.component("accordion", {
        transclude: true,
        template: "<div class='panel-group' ng-transclude></div>",
        controllerAs:"model",
        controller: function() {
            var model = this;
            var panels = [];

            model.selectPanel = function(panel) {
                for (var i in panels) {
                    if (panel === panels[i]) {
                        panels[i].turnOn();
                    } else {
                        panels[i].turnOff();
                    }
                }
            };

            model.addPanel = function(panel) {
                panels.push(panel);
                if (panels.length > 0) {
                    panels[0].turnOn();
                }
            };

        }
    });

}());