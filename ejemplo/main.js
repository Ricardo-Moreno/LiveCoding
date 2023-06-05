

// function contador() {
//     for (let index = 10; index >= 0; index--) {
//         console.log('conteo ' + index)
//     }
//     console.log('Despegamos!!')
// }

// contador()


const cuentaRegresiva = numero => {
    if (numero >= 0) {
        console.log(numero)
        cuentaRegresiva(numero - 1)
    }
    else {
        console.log("Despegamos!!");
    }

}

cuentaRegresiva(20)
cuentaRegresiva(10)

const perrito = {
    patas: 3,
    camina: true,
    color: "marron"
}