// let persona = {
//     nombre: 'Juan',
//     edad: 25,
//     profesion: 'Desarrollador web'
// }

// persona.nombre = "pedro"
// console.log(persona.nombre)


//   Acceder a los valores en las propiedades y modificarlos:
// Puedes acceder a los valores de las propiedades de un objeto utilizando la sintaxis de punto objeto.propiedad o la sintaxis de corchetes objeto['propiedad'].

// console.log(persona.nombre); // Acceder al valor de la propiedad 'nombre'
// console.log(persona['edad']); // Acceder al valor de la propiedad 'edad'

// Modificar los valores de las propiedades
// persona.nombre = 'Pedro';
// persona['edad'] = 30;


// Utilizar los métodos:
// Los objetos en JavaScript pueden tener métodos, que son funciones definidas dentro del objeto. Puedes invocar estos métodos utilizando la sintaxis de punto objeto.metodo().

const persona = {
    nombre: 'Juan',
    edad: 25,
    profesion: 'Desarrollador web',
    saludar: function () {
        console.log('¡Hola! Mi nombre es ' + this.nombre + '.');
    }
};


// console.log(persona.profesion)
persona.saludar()


// persona.saludar(); // Invocar el método 'saludar' del objeto 'persona'

//   En este ejemplo, el método saludar muestra un mensaje que incluye el nombre de la persona.

// Recuerda que this se refiere al objeto actual en el contexto en el que se encuentra.

// Estos son los conceptos básicos para crear objetos, acceder a los valores en sus propiedades, modificarlos y utilizar sus métodos en JavaScript. Los objetos son fundamentales en la programación orientada a objetos y te permiten modelar y manipular datos de manera más estructurada y flexible. ¡Espero que esta explicación te haya sido útil!