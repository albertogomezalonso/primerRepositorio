/*
Comentario de 
varias lineas
*/


/*

document.write('Si funciona Javascript' + '\n');

// Generar alerta a Usuario
// alert("ventana de alerta para Usuario");
var nombre = prompt("Por favor introduce su nombre");
document.write("Bienvenido: " + nombre + "<br/>");

var edad = prompt("Por favor introduce tu edad");
document.write("Tienes " + edad + "años");

*/

// operaciones matematicas 
/*
var numUno = 5;
var numDos = 3;
var numTres = 2;

var suma = numUno+numDos;

var resultado = suma / numTres;

console.log(suma);
console.log(resultado);

document.write("Suma=" + suma);
*/

var numUno = parseInt(prompt("Introduczca valor 1"));
var numDos = parseInt(prompt("Introduczca valor 2"));
var numTres = parseInt(prompt("Introduczca valor 3"));

// otra opcion y no se pone parseInt antes
//var suma = eval(numUno)+eval(numDos);

var resultado = (numUno+numDos) / numTres;


console.log("La operación es la siguiente " + numUno + " + " + numDos + "/" + numTres);
console.log(resultado);

