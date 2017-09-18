var listacompra = [];
var listacompra2 = new Array();
        
listacompra[1]="tomates";
listacompra[2]="ajos";
listacompra.push("pasta");

for (var i=0; i<listacompra.length; i++){
    console.log(listacompra[i]);
}
var dulces = ["caramelo","regaliz", "chocolate"];

listacompra["dulces"]=dulces;


for(var key in listacompra){
    var valor = listacompra[key];
    console.log(key+" ->"+valor);
}
console.log(listacompra);
//console.info(listocompra);

var infoUsu = [];
infoUsu["nombre"]="juan";
infoUsu["apellido"]="Garcia";
infoUsu["estudios"]=[];

var usuarios=[];
usuarios[1]=infoUsu;

var usuario=usuarios[1];
document.write('<br />Nombre Usuario: ');
document.write(usuario.nombre);
document.write('<br />Apellido: ');
document.write(usuario.apellido);
usuario.estudios.push("mecaninca");

var estudio1 = usuario.estudios[0];
document.write('<br />Estudio1: ');
document.write(estudio1); 
