function Coche(){
    this.nombre;
    this.precio;
    this.extras = [];
    this.addExtra= function(nomExtra){
        this.extras.push(nomExtra);
        return this.extras.length;
    };
    this.getExtra = function(numExtra){
        return this.extras[numExtra];
    };
}

var coche = new Coche();
coche.nombre="Fantastico";
coche.precio="70000€";
document.write('<br />Nompre Coche: ');
document.write(coche.nombre);
document.write('<br />Precio: ');
document.write(coche.precio);
var numExtra = coche.addExtra("Airbag");
var extra = coche.getExtra(numExtra-1);
document.write('<br />Extra: ');
document.write(extra);

function Concesionario(){
    this.nombre;
    this.direccion;
    this.coches=[];
    this.setNombre = function(nombre){
        this.nombre = nombre;
    };
    this.setDireccion = function(direccion){
        this.direccion = direccion;
    };
    this.addComanda = function (coche){
        this.coches = coche;
};

/*Código de comprovación de Concesionario*/
var myConcesionario= new Concesionario();
myConcesionario.setNombre("Mario Kart");
myConcesionario.setDireccion("c/Mushroom Kingdom 1");

var coche = new Coche();
coche.nombre="Fantastico!";
coche.precio="70000€";
var numExtra = coche.addExtra("Airbag");
var extra = coche.getExtra(numExtra-1);
var posicionComanda = myConcesionario.addComanda(coche);

document.write('<br />Nompre Concesionario: ');
document.write(myConcesionario.nombre);
document.write('<br />Direccion: ');
document.write(myConcesionario.direccion);
document.write('<br /> Nombre coche: ');
document.write(myConcesionario.comanda[posicionComanda-1].nombre);
document.write('<br /> Nombre extra: ');
document.write(myConcesionario.comanda[posicionComanda-1].extras[numExtra-1]);
