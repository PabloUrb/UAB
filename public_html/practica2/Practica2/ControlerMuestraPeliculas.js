app.controller('MuestraPeliculas',['$scope','PeliculasService'
        ,function($scope,PeliculasService){
            $scope.actoresControler = PeliculasService.actores;
            $scope.peliculaControler=PeliculasService.pelicula;
            $scope.peliculasControler=PeliculasService.peliculas;
    }]);
