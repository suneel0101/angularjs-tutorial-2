function CoolCtrl($scope) {
    $scope.editing = false;

    $scope.toggleMode = function (){
        $scope.editing = !$scope.editing;
    };
}
