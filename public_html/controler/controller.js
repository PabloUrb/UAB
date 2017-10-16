angular.module('myApp', [])
        .controller('controlador', ['$scope',
                function ($scope) {
                $scope.opcion1 = "valor1";
                        $scope.opcion2 = "valor1";
                        $scope.opcion3 = "valor1";
                        $scope.mostrarDatos = true;
                        $scope.guardar1 = "valor1";
                        $scope.guardar2 = "valor1";
                        $scope.guardar3 = "valor1";
                        $scope.buena = true;
                        $scope.cheked=false;
                        $scope.clicaOpcion1 = function () {

                        switch ($scope.opcion1) {
                        case "valor1":
                                $scope.opcion1 = "valor2";
                                break;
                                case "valor2":
                                $scope.opcion1 = "valor3";
                                break;
                                case "valor3":
                                $scope.opcion1 = "valor4";
                                break;
                                case "valor4":
                                $scope.opcion1 = "valor1";
                                break;
                        }
                        ;
                        };
                        $scope.clicaOpcion2 = function () {

                        switch ($scope.opcion2) {
                        case "valor1":
                                $scope.opcion2 = "valor2";
                                break;
                                case "valor2":
                                $scope.opcion2 = "valor3";
                                break;
                                case "valor3":
                                $scope.opcion2 = "valor4";
                                break;
                                case "valor4":
                                $scope.opcion2 = "valor1";
                                break;
                        }
                        ;
                        };
                        $scope.clicaOpcion3 = function () {

                        switch ($scope.opcion3) {
                        case "valor1":
                                $scope.opcion3 = "valor2";
                                break;
                                case "valor2":
                                $scope.opcion3 = "valor3";
                                break;
                                case "valor3":
                                $scope.opcion3 = "valor4";
                                break;
                                case "valor4":
                                $scope.opcion3 = "valor1";
                                break;
                        }
                        ;
                        };
                        $scope.onShowHide = function (value) {
                        $scope.mostrarDatos = value;
                                $scope.guardar1 = $scope.opcion1;
                                $scope.guardar2 = $scope.opcion2;
                                $scope.guardar3 = $scope.opcion3;
                                if ($scope.opcion1 !== "buena") {
                        $scope.opcion1 = 'valor1';
                        }
                        if ($scope.opcion2 !== "buena") {
                        $scope.opcion2 = 'valor1';
                        }
                        if ($scope.opcion3 !== "buena") {
                        $scope.opcion3 = 'valor1';
                        }




                        };
                        $scope.intentos=[];
                        
                        $scope.onShowHide2 = function () {
                        
                        $scope.intentos.push([$scope.opcion1,$scope.opcion2,$scope.opcion3]);
                        
                                if ($scope.opcion1 === $scope.guardar1) {
                        $scope.opcion1 = "buena";
                        }
                        if ($scope.opcion2 === $scope.guardar2) {
                        $scope.opcion2 = "buena";
                        }
                        if ($scope.opcion3 === $scope.guardar3) {
                        $scope.opcion3 = "buena";
                        }
                        if ($scope.opcion1 === "buena" && $scope.opcion2 === "buena" && $scope.opcion3 === "buena") {
                        $scope.cheked=true;
                                $scope.mostrarDatos = true;
                        } else {
                        $scope.mostrarDatos = false;
                        }
                        };
                        $scope.reboot = function(){
                            $scope.opcion1 = "valor1";
                        $scope.opcion2 = "valor1";
                        $scope.opcion3 = "valor1";
                        $scope.mostrarDatos = true;
                        $scope.guardar1 = "valor1";
                        $scope.guardar2 = "valor1";
                        $scope.guardar3 = "valor1";
                        $scope.buena = true;
                        $scope.cheked=false;
                        };
                }]);
