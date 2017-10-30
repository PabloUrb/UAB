app.service("PeliculasService",function(){
            this.actores=[["Harrison","Ford","1988", "estadounidense"],["Mary Sean","Young","1988", "estadounidense"]];
            this.pelicula=[this.actores, "Blade Runner","Ridley Scott", 1982];
            this.pelicula2=[[["Harrison","Ford"],["Mark","Hamill"]],"Star Wars", "George Lucas", 1977];
            this.peliculas=[this.pelicula, this.pelicula2 ];
        }
);