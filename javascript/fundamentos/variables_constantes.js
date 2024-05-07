//Variables

var numero = 2;

if (numero>6) {
    console.log("Esta aprobado");
}else{
   console.log("Esta desaprobado");
}

var respuesta= (numero>6) ? 'Aprobado':'Desaprobado';

console.log(respuesta);

//Diferencias entre let y var

var x = 44;

if (x==44) {
    x=74
    console.log(x)
}

console.log(x)

let y=50
if (y==50) {
    let y=11
    console.log(y)
}
console.log(y)

const nombre="Juan";
nombre="Pepe";