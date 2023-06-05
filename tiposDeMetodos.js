// Métodos de objeto:
// Los métodos de objeto son funciones que están asociadas a un objeto específico. Se definen dentro del cuerpo de un objeto y pueden acceder a las propiedades y otros métodos del objeto utilizando la palabra clave this. Estos métodos se invocan en el contexto de ese objeto.

const objeto = {
    propiedad: valor,
    metodo: function () {
        // Código del método
    }
};

//   Métodos de array:
// Los métodos de array son funciones incorporadas en JavaScript que se aplican a los objetos de tipo array. Estos métodos proporcionan funcionalidades útiles para manipular y operar en los elementos de un array, como forEach, map, filter, reduce, entre otros.

const array = [1, 2, 3, 4, 5];
array.forEach(function (elemento) {
    // Código del método forEach
});


// Métodos de string:
// Los métodos de string son funciones incorporadas en JavaScript que se aplican a los objetos de tipo string. Estos métodos te permiten realizar operaciones y manipulaciones en cadenas de texto, como toUpperCase, toLowerCase, split, slice, entre otros.

const texto = "Hola, mundo!";
// console.log(texto.toUpperCase()); // Método toUpperCase


// Métodos estáticos:
// Los métodos estáticos son métodos definidos en una clase, pero no están asociados a instancias específicas de la clase. Se invocan directamente en la clase misma, sin necesidad de crear una instancia. Estos métodos se utilizan cuando la funcionalidad no está relacionada con instancias individuales.

class MiClase {
    static metodoEstatico() {
        // Código del método estático
    }
}

MiClase.metodoEstatico(); // Invocación del método estático


// Estos son solo algunos de los tipos de métodos que puedes encontrar en JavaScript. Cada tipo de método tiene sus propias características y se utiliza en diferentes contextos para realizar diferentes tareas. Es importante comprender la naturaleza de cada tipo de método y cómo se aplican en tu código.