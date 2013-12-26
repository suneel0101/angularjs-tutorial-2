var myApp = angular.module("Suneelius", []);

myApp.factory('Data', function () {
  return { message: "I'm data from a service" };
});

myApp.factory("Avengers", function () {
    var Avengers = {};
    Avengers.cast = [
        {name: "Clark Gregg", character: "Johny Aplesed"},
        {name: "Johnny Depp", character: "Jack Sparrow"},
        {name: "Clark Kent", character: "Superman"},
        {name: "Bruce Wayne", character: "Batman"}
    ];
    return Avengers;
});

myApp.filter('reverse', function (Data) {
    return function(text) {
        return text.split("").reverse().join("") + Data.message;
    }
});

function AvengersCtrl($scope, Avengers){
    $scope.avengers = Avengers;
}

function FirstCtrl($scope, Data) {
    $scope.data = Data;
}

function SecondCtrl ($scope, Data) {
    $scope.data = Data;
}
