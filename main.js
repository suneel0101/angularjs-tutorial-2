var myApp = angular.module("Suneelius", []);
myApp.directive("enter", function (){
    return function (scope, element){
        element.bind("mouseenter", function () {
            alert("I'm inside of this!");
        });
    };
});

myApp.directive("leave", function (){
    return function (scope, element){
        element.bind("mouseleave", function () {
            alert("I'm leaving on a jetplane");
        });
    };
});
