// Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

/*

let numero = +(prompt("ingrese un numero"));

for(i=0; i<=5; i++){
    console.log(numero + i);
}

*/



// Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

/*
let textoIngresado = prompt("ingrese aquì sus Autores favorìtos; para finalizar digite ESC");

while(textoIngresado != "ESC"){
    console.log(" El autor ingresado es : "+textoIngresado);
    textoIngresado = prompt("ingrese otro de sus Autores Predilectos");
}

*/

// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

let ValorNumerico = +(prompt("Ingrese aquì el numero de veces que desea repetir su saludo"));
let contador = 0;

while(contador != ValorNumerico){
    console.log("HOLA");
    contador = contador + 1;
}



    