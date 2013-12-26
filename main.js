var myApp = angular.module("Suneelius", []);

myApp.directive("superhero", function (){
    return {
        restrict: "E",
        scope: {},
        controller: function ($scope) {
            $scope.abilities = [];
            this.addStrength = function (){
                $scope.abilities.push("strength");
            };

            this.addSpeed = function (){
                $scope.abilities.push("speed");
            };

            this.addFlight = function (){
                $scope.abilities.push("flight");
            };

        },
        link: function(scope, element) {
            element.addClass("btn-primary btn");
            element.bind("mouseenter", function (){
                alert(scope.abilities);
            });
        }
    };
});


myApp.directive("strength", function () {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl){
            superheroCtrl.addStrength();
        }
    };
});


myApp.directive("speed", function () {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl){
            superheroCtrl.addSpeed();
        }
    };
});


myApp.directive("flight", function () {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl){
            superheroCtrl.addFlight();
        }
    };
});
