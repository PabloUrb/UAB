function Coche() {
    this.nombre;
    this.precio;
    this.extras = [];
    this.addExtra = function (nomExtra) {
        this.extras.push(nomExtra);
        return this.extras.length;
    };
    this.getExtra = function (numExtra) {
        return this.extras[numExtra];
    };
}
;

var coche = new Coche();
coche.nombre = "Fantastico";
coche.precio = "70000€";
document.write('<br />Nompre Coche: ');
document.write(coche.nombre);
document.write('<br />Precio: ');
document.write(coche.precio);
var numExtra = coche.addExtra("Airbag");
var extra = coche.getExtra(numExtra - 1);
document.write('<br />Extra: ');
document.write(extra);

function Concesionario() {
    this.nombre;
    this.direccion;
    this.comanda = [];
    this.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    this.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    this.addComanda = function () {
        this.comanda.push(coche);
        return this.comanda.length;
    };
    function Coche(){
        this.nombre=[];
        this.precio;
        this.extras = new Aray();
        
        this.addExtar = function(extra){
            this.extras.push(extra);
            return this.extras.length;
        };
    }
   
}
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

document.write('<br/>');
document.write('<br />Nompre Concesionario: ');
document.write(myConcesionario.nombre);
document.write('<br />Direccion: ');
document.write(myConcesionario.direccion);
document.write('<br /> Nombre coche: ');
document.write(myConcesionario.comanda[posicionComanda-1].nombre);
document.write('<br /> Nombre extra: ');
document.write(myConcesionario.comanda[posicionComanda-1].extras[numExtra-1]);


document.write('<br/>');
var myConcesionario2 = new Concesionario();
myConcesionario2.setNombre("Mercedes");
myConcesionario2.setDireccion("c/ pelayo");

document.write('<br />Nombre Concesionario: ');
document.write(myConcesionario2.nombre);
document.write('<br />Direccion: ');
document.write(myConcesionario2.direccion);

var coche2 = new Coche();
coche2.nombre="A";
coche2.precio="30000";
var numExtra=coche2.addExtra("holaa");
var extra = coche2.getExtra(numExtra-1);
var posicionComanda = myConcesionario2.addComanda(coche2);


document.write('<br /> Nombre coches: ');
document.write(myConcesionario2.comanda[posicionComanda-1].nombre);
document.write('<br /> Nombre extra: ');
document.write(myConcesionario2.comanda[posicionComanda-1].extras[numExtra-1]);


