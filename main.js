var myApp = angular.module("Suneelius", []);

myApp.directive("superman", function () {
    return {
        // A for attr, C for class, E for element
        restrict: "A",
        link: function () {
            alert("I'm awesomer!");
        }
    };
});

myApp.directive("flash", function () {
    return {
        // A for attr, C for class, E for element
        restrict: "A",
        link: function () {
            alert("I'm fast");
        }
    };
});
