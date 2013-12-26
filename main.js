var myApp = angular.module("Suneelius", []);
myApp.directive("clock", function (){
    return {
        restrict: "E",
        scope: {
            timezone: "@"
        },
        template: "<div class='well'> 12pm {{ timezone }}"
    };
});

myApp.directive('panel', function (){
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@"
        },
        template: "<div style='border: 3px solid #000000'><div class='well'>{{ title }}</div><div ng-transclude></div></div>"
    };
});
