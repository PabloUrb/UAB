

var lista_numeros = [3,4,5,6,1];
lista_numeros[3]=7;
lista_numeros[4] = 9;


function mostraArray(){
    var info= document.getElementById("infoArray");
    info.innerHTML="";
    for(k=0;k<lista_numeros.length;k++){
        info.innerHTML+="<div>"+lista_numeros[k]+"</div>";
    }           
}

function primero_ultimo(){
    var info = document.getElementById("infoArray2");
    for(k=0;k<lista_numeros.length;k++){
        if(k == 0 || k == 4){
        info.innerHTML+="<div>"+lista_numeros[k]+"</div>";   
        }
    }  
} 

function añadir_ultimo(){
    //numero = document.getElementById("numero").value;
    var numero = window.prompt("Indica el numero");   
    lista_numeros.push(numero);
    mostraArray();
}
function añadir_primero(){
    //numero = document.getElementById("numero").value;
    var numero2 = window.prompt("Indica el numero");   
    lista_numeros.unshift(numero2);
    mostraArray();
}
function borrar_ultimo(){
    
}