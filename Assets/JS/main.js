
var Eleccion = document.getElementById("elegir");
var botonSiguiente = document.getElementById("Siguiente");
var OpcionesAleatoria = [];
var secuencia1 = [6];
var secuencia2 = [];
var secuencia3 = [];

Aleatorio = valorAleatorio();
formaExplicita1();
formaExplicita2();
formaExplicita3();
llenaArray();
mostrarArray();
mostrarEleccion();

function valorAleatorio() {
    var Aleatorio = Math.floor(Math.random() * (27 - 6)) + 0;
    return Aleatorio;
}

function formaExplicita1 (num) {
    var lim = num + 6;
    for (let num; num < lim; num++) {
        secuencia1[i] = (3 * num) - 2;
    }
}
function formaExplicita2 (num) {
    var lim = num + 6;
    for (let num; num < lim; num++) {
        secuencia2[i] = (5 * num) - 2;
    }
}
function formaExplicita3 (num) {
    var lim = num + 6;
    for (let num; num < lim; num++) {
        secuencia3[i] = (num - 6);
    }
}

function llenaArray() {
    
    for (let i = 0; i < 6; i++) {
        OpcionesAleatoria[i] = Math.floor(Math.random() * (100 - 0)) + 0;
    }
}

function mostrarArray() {

    var Mostrar = document.getElementById("OP");
    Mostrar.innerHTML = "";

    for (let i = 0; i < OpcionesAleatoria.length; i++) {
        var texto = document.createTextNode(OpcionesAleatoria[i]);
        var Mostrar1 = document.createElement("li");
        Mostrar1.appendChild(texto);
        Mostrar.appendChild(Mostrar1);
    }

}
function mostrarEleccion() {

    var Mostrar = document.getElementById("elec");
    Mostrar.innerHTML = "";

    for (let i = 0; i < OpcionesAleatoria.length; i++) {
        var texto = document.createTextNode(OpcionesAleatoria[i]);
        var Mostrar1 = document.createElement("li");
        Mostrar1.appendChild(texto);
        Mostrar.appendChild(Mostrar1);
    }
}



