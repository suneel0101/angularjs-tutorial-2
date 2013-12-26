var myApp = angular.module("Suneelius", []);

myApp.controller("AppCtrl", function($scope) {
    $scope.loadMoreTweets = function () {
        alert("Loading tweets!");
    };
    $scope.deleteTweets = function () {
        alert("deleting tweets!");
    };
});


myApp.directive("enter", function (){
    return function (scope, element, attrs){
        element.bind("mouseenter", function () {
            scope.$apply(attrs.enter);
        });
    };
});

myApp.directive("leave", function (){
    return function (scope, element, attrs){
        element.bind("mouseleave", function () {
            element.removeClass(attrs.enter);
        });
    };
});
