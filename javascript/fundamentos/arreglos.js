//Generar una regla

let lenguajes=['Javascript','Php','C++', 'Python','Go','C#']

let longitud=lenguajes.length;

console.log("la longitud del arreglos es" , longitud);

//Ultimo elemento de un array
let ultimo=lenguajes[longitud-1];
console.log("el ultimo elemento del arreglo es: ", ultimo);

//Recorrer arreglo con la estructura forEach
lenguajes.forEach((element,i) => {
    console.log(i,element);
});


//Agregar un elemento al final del arreglo

lenguajes.push('Java');

console.log(lenguajes)

//Como eliminar el ultimo elemento de un arreglo

lenguajes.pop();

console.log(lenguajes);

//Como agregar un elemento al inicio de un array

lenguajes.unshift('Java');
console.log(lenguajes);

//Como eliminar el primer elemento de una array

lenguajes.shift();
console.log(lenguajes);

//Imprimir posicion del elemento deseado
let indice_php=lenguajes.indexOf('Php')

console.log(indice_php)

//Eliminar un elemento en cualquier posicion de un array

lenguajes.splice(indice_php, 2);
console.log(lenguajes)

lenguajes.splice(indice_php, 0, 'Visual Basic');
console.log(lenguajes)

//Copiando el mismo arreglo
let lenguajes2=lenguajes.slice();
lenguajes2.push('Java')
console.log(lenguajes, lenguajes2)
