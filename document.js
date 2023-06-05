//? DOM (Document Object Model):
// El DOM es una representación estructurada y jerárquica de un documento HTML o XML, que permite acceder y manipular los elementos del documento de manera programática. En JavaScript, el DOM es proporcionado por el navegador y se puede acceder mediante el objeto document. El DOM organiza los elementos HTML en un árbol, donde cada elemento se representa como un objeto con propiedades y métodos que permiten interactuar con él. Puedes utilizar métodos como getElementById(), querySelector(), createElement() y propiedades como textContent para acceder y modificar elementos del DOM.

//? Window:
// El objeto window es un objeto global en JavaScript que representa la ventana del navegador. Proporciona una interfaz para interactuar con la ventana del navegador y tiene múltiples funciones y propiedades útiles. Algunas de las funcionalidades proporcionadas por el objeto window incluyen la apertura de nuevas ventanas o pestañas (window.open()), el manejo de eventos (window.addEventListener()), el control de temporizadores (window.setTimeout(), window.setInterval()), y la navegación del historial (window.history). También proporciona acceso a otros objetos globales, como document, console, navigator, entre otros.

//? Console:
// El objeto console es una interfaz proporcionada por el navegador que permite la impresión de mensajes en la consola del navegador, lo cual es útil para el desarrollo y depuración de aplicaciones web. El objeto console proporciona métodos como log(), error(), warn(), info(), entre otros, que se utilizan para imprimir mensajes de diferentes niveles de severidad en la consola. Puedes utilizar estos métodos para mostrar información, errores, advertencias o mensajes de depuración durante la ejecución de tu código JavaScript.




//? Ejemplo con el objeto console:
// El método log() del objeto console se utiliza para imprimir mensajes en la consola del navegador. Puedes pasar cualquier valor como argumento para que se muestre en la consola.

// console.log("¡Hola, mundo!"); // Imprime el mensaje en la consola

//? Ejemplo con el objeto window:
// El método alert() del objeto window se utiliza para mostrar un mensaje emergente en el navegador. Puedes pasar una cadena de texto como argumento para que se muestre en la ventana emergente.


// window.alert("¡Este es un mensaje emergente!"); // Muestra un mensaje emergente


// ? Ejemplo con el objeto document:
// El objeto document representa el documento HTML actual en el navegador. Puedes utilizar sus métodos para interactuar con los elementos del documento.

// Obtener un elemento por su ID y modificar su contenido
const miElemento = document.getElementById("mi-elemento");
miElemento.textContent = "Nuevo contenido";

// Crear un nuevo elemento y agregarlo al documento
const nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "¡Este es un nuevo párrafo! Hoy";
document.body.appendChild(nuevoElemento);

// En este ejemplo, estamos utilizando el método getElementById() para obtener un elemento por su ID y modificar su contenido utilizando la propiedad textContent. Luego, creamos un nuevo elemento p, le asignamos un contenido y lo agregamos al documento utilizando el método appendChild().

// Estos son solo ejemplos básicos para demostrar el uso de estos métodos. Cada uno de ellos tiene muchas más funcionalidades y opciones disponibles. Espero que esto te ayude a comprender cómo se utilizan estos métodos en el contexto del objeto console, window y document. ¡Prueba estos ejemplos en tu navegador y experimenta con ellos!