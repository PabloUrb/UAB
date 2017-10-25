
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
var Extras = ["airbag", "aire", "musica", "ABS", "lunas tintadas"];

var coche = new Coche();
coche.nombre = "Fantastico";
coche.precio = "70000€";
document.write('<br />Nombre Coche: ');
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
    this.addComanda = function (coche) {
        this.comanda.push(coche);
        return this.comanda.length;
    };
}

//EJ 5
var coche2 = new Coche();
coche2.nombre = "Speed";

var conce2 = new Concesionario();



/*Código de comprovación de Concesionario*/
var myConcesionario = new Concesionario();
myConcesionario.setNombre("Mario Kart");
myConcesionario.setDireccion("c/Mushroom Kingdom 1");

var coche = new Coche();
coche.nombre = "Fantastico!";
coche.precio = "70000€";
var numExtra = coche.addExtra("Airbag");
var extra = coche.getExtra(numExtra - 1);
var posicionComanda = myConcesionario.addComanda(coche);

document.write('<br />Nombre Concesionario: ');
document.write(myConcesionario.nombre);
document.write('<br />Direccion: ');
document.write(myConcesionario.direccion);
document.write('<br /> Nombre coche: ');
document.write(myConcesionario.comanda[posicionComanda - 1].nombre);
document.write('<br /> Nombre extra: ');
document.write(myConcesionario.comanda[posicionComanda - 1].extras[numExtra - 1] + "<br />"
        + "<br />");


/** Nuevo concesionario **/
/**5.	Utilizando las clases creadas anteriormente, 
 * crea un nuevo concesionario y añádele  4 comandas
 *  de coches formados por 4 extras escogidos de 
 *  manera aleatoria del array creado en el punto 2.**/

var nuevoConcesionario = new Concesionario();
nuevoConcesionario.nombre = "Super concesionario";
nuevoConcesionario.direccion = "c/ Pelayo n 10";

function Extra() {
    this.nom;
    this.imgSrc;
    this.preu;
}
var extra = new Extra();
extra.nom = "IA";
extra.imgSrc = "IA.jpg";
extra.preu = 5000;

var extras = ["ABS", "turbo", "elvaduras electricas", "GPS"];

var ia = extras[0].nom; //IA
var techo = extras[1][0]; //techo solar
var cohetes = extras[2].nombre; //cohetes

var coche1 = new Coche();
coche1.nombre = "A1";
coche1.precio = "9999999";
var coche2 = new Coche();
coche2.nombre = "A2";
coche2.precio = "9999999";
var coche3 = new Coche();
coche3.nombre = "A3";
coche3.precio = "9999999";
var coche4 = new Coche();
coche4.nombre = "RCZ";
coche4.precio = "9999999";

for (k = 0; k < 4; k++) {
    var extrasCopia = extras;
    var n = Math.floor(Math.random() * extrasCopia.length);
    console.log(extrasCopia[n]);
    coche1.addExtra(extrasCopia[n]);
    extrasCopia.splice(n, 1);
}
document.write("<table style='border: 1px solid black'>\n\
<tr style='width: 100%'>\n\
<th style='border: 1px solid black'>" + "Nombre Concesionario: " + myConcesionario.nombre + "        Direccion: " + myConcesionario.direccion + "</th>\n\
</tr>");
document.write("<tr>\n\
<th style='border: 1px solid black'>" + "COMANDAS" + "</th>\n\
</tr>");
document.write("<tr>\n\
<th style='border: 1px solid black'>Posicion</th>\n\
<th style='border: 1px solid black'> Nombre  </th>\n\
<th style='border: 1px solid black'>Precio </th>\n\
<th style='border: 1px solid black'>Extras</th>\n\
</tr>");
document.write("<tr border: 1px solid black'><th>1</th>");
document.write("<th border: 1px solid black'>"+coche1.nombre + "</th>");
document.write("<th border: 1px solid black'>"+coche1.precio+"</th>");
document.write("<th border: 1px solid black'>"+coche1.getExtra(0) + "<br>");
document.write(""+coche1.getExtra(1) + "<br>");
document.write(""+coche1.getExtra(2) + "<br>");
document.write(""+coche1.getExtra(3) + "</th><br>" );
var extras = ["ABS", "turbo", "elvaduras electricas", "GPS", "Michael Knight"];

var ia = extras[0].nom; //IA
var techo = extras[1][0]; //techo solar
var cohetes = extras[2].nombre; //cohetes
for (k = 0; k < 4; k++) {
    var extrasCopia = extras;
    var n = Math.floor(Math.random() * extrasCopia.length);
    console.log(extrasCopia[n]);
    coche2.addExtra(extrasCopia[n]);
    extrasCopia.splice(n, 1);
}

document.write("<tr border: 1px solid black'><th>2</th>");
document.write("<th border: 1px solid black'>"+coche2.nombre + "</th>");
document.write("<th border: 1px solid black'>"+coche2.precio+"</th>");
document.write("<th border: 1px solid black'>"+coche2.getExtra(0) + "<br>");
document.write(""+coche2.getExtra(1) + "<br>");
document.write(""+coche2.getExtra(2) + "<br>");
document.write(""+coche2.getExtra(3) + "</th><br>");
var extras = ["ABS", "turbo", "elvaduras electricas", "GPS", "Michael Knight"];

var ia = extras[0].nom; //IA
var techo = extras[1][0]; //techo solar
var cohetes = extras[2].nombre; //cohetes
for (k = 0; k < 4; k++) {
    var extrasCopia = extras;
    var n = Math.floor(Math.random() * extrasCopia.length);
    console.log(extrasCopia[n]);
    coche3.addExtra(extrasCopia[n]);
    extrasCopia.splice(n, 1);
}
document.write("<tr border: 1px solid black'><th>3</th>");
document.write("<th border: 1px solid black'>"+coche3.nombre + "</th>");
document.write("<th border: 1px solid black'>"+coche3.precio+"</th>");
document.write("<th border: 1px solid black'>"+coche3.getExtra(0) + "<br>");
document.write(""+coche3.getExtra(1) + "<br>");
document.write(""+coche3.getExtra(2) + "<br>");
document.write(""+coche3.getExtra(3) + "</th><br>" );
var extras = ["ABS", "turbo", "elvaduras electricas", "GPS", "Michael Knight"];

var ia = extras[0].nom; //IA
var techo = extras[1][0]; //techo solar
var cohetes = extras[2].nombre; //cohetes
for (k = 0; k < 4; k++) {
    var extrasCopia = extras;
    var n = Math.floor(Math.random() * extrasCopia.length);
    console.log(extrasCopia[n]);
    coche4.addExtra(extrasCopia[n]);
    extrasCopia.splice(n, 1);
}
document.write("<tr border: 1px solid black'><th>4</th>");
document.write("<th border: 1px solid black'>"+coche4.nombre + "</th>");
document.write("<th border: 1px solid black'>"+coche4.precio+"</th>");
document.write("<th border: 1px solid black'>"+coche4.getExtra(0) + "<br>");
document.write(""+coche4.getExtra(1) + "<br>");
document.write(""+coche4.getExtra(2) + "<br>");
document.write(""+coche4.getExtra(3) + "</th><br>" + "</table>");
/*ALTA DE COCHES*/
function altaCoche() {
    
    var nom = document.forms["FormalaltaCoche"]["nom"].value;
    var preu = document.forms["FormalaltaCoche"]["preu"].value;
    var coche = new Coche();
    coche.nombre = nom;
    coche.precio = preu;
    nuevoConcesionario.addComanda(coche);
    document.getElementById("listaCoches").innerHTML += "NOMBRE: " + coche.nombre + " <br/>";
    document.getElementById("listaCoches").innerHTML += "Precio: " + coche.precio + "<br/>";
//document.write("Nombre: "+coche.nombre+"<br />");
//document.write("Precio: "+coche.precio+"<br />");
}
function borrarCoche(){

    document.getElementById("listaCoches").array.pop(coche.nombre);
    document.getElementById("listaCoches").array.pop(coche.precio);
}


