angular.module('myApp', [])
        .controller('controlador', ['$scope',
            function ($scope) {
                $scope.misValores = ["primer", "segon", "tercer"];
                $scope.tipusValor = "positiu";
                $scope.myCol = 'lightblue';
                $scope.num = 2;
                $scope.resul = 0;

                $scope.suma = function () {
                    $scope.resul = parseInt($scope.myCol) + parseInt($scope.num);
                };
                if ($scope.resul < 0) {
                    $scope.tipusValor = "negatiu";
                } else {
                    $scope.tipusValor
                }
            }]);