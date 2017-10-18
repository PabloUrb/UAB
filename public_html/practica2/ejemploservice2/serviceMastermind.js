angular.module('myApp').service(
        'obtenCombinacion', function(){
           this.password=[];
           this.getcombinacion=function(){
               return this.password;
           };
           this.getNumeroCombinacion=function(posicion){
               return this.password[posicion];
           }
           this.setCombinaicon = function(pass){
               this.password = pass;
           };
        });