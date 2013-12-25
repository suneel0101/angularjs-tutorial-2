function CoolCtrl($scope) {
    $scope.editing = false;

    $scope.toggleMode = function (){
        debugger
        $scope.editing = !$scope.editing;
    };
}
