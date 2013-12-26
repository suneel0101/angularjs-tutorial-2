var myApp = angular.module("Suneelius", []);

myApp.directive("superman", function () {
    return {
        restrict: "E",
        template: "<div>Here I am</div>"
    };
});
