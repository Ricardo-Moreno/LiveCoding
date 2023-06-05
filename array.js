// Bucle for: El bucle for clásico es una forma tradicional de recorrer un array. Puedes usar el método length del array para determinar la longitud y acceder a cada elemento utilizando el índice.


let arrayForClasico = ["Ricardo", "juan", "julio", "maria", "lucia"];

// for (let index = 0; index < arrayForClasico.length; index++) {
//     // console.log(index)
//     console.log(arrayForClasico[2])
// }



// console.log(arrayForClasico.length)


// let longitud = arrayForClasico.length
// console.log(longitud)

for (let index = 0; index < arrayForClasico.length; index++) {
    // console.log(arrayForClasico[index]);
}

// Bucle for...of: El bucle for...of es una sintaxis más reciente que proporciona una forma más sencilla de recorrer un array. No necesitas preocuparte por los índices, simplemente puedes acceder directamente a cada elemento.

const arrayForOf = [1, 2, 3, 4, 5, "mentira"];

for (const dato of arrayForOf) {
    // console.log(dato);
}

// Método forEach: El método forEach es una función de orden superior disponible en los arrays de JavaScript. Permite ejecutar una función para cada elemento del array.

const arrayForEach = [1, 2, 3, 4, 5];

arrayForEach.forEach(function (element) {
    // console.log(element);
});


// Método map: El método map también es una función de orden superior. A diferencia de forEach, map crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento.

const arrayMap = [1, 2, 3, 4, 5];

const newArray = arrayMap.map(function (element) {
    return element * 2;
});

// console.log(newArray);