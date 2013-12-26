var myApp = angular.module("Suneelius", []);

myApp.directive("country", function (){
    return {
        restrict: "E",
        controller: function (){
            this.makeAnnouncement = function(message) {
                alert(message);
          };
        }
    }
});

myApp.directive("state", function (){
    return {
        restrict: "E",
        controller: function (){
            this.makeLaw = function (law) {
                alert("Law" + law);
            };
        }
    };
});


myApp.directive("city", function (){
    return {
        require:["^country", "^state"],
        restrict: "E",
        link: function(scope, element, attrs, ctrls) {
            ctrls[1].makeLaw("Jump higher");
            ctrls[0].makeAnnouncement("We are the best!");
        }
    };
});
