const arrayNumeros = Array(90)
const arrayJugador = Array(15)
const arrayCPU = Array(15)
const boton = document.querySelector(".boton")
const numeroSorteo = document.querySelector(".numero-sorteo")

rellenarBombo()
createCard(arrayJugador)
createCard(arrayCPU)

function rellenarBombo (){
    for(let i = 1; i <= arrayNumeros.length; i++){
        arrayNumeros[i-1] = i;
    }
    console.log(arrayNumeros)
}

function createCard(array){
    let numero = 0;
    let index = 0;
    for(let x = 0; x <= array.length-1; x++){
        numero = Math.floor(Math.random() * (91 - 1 ) + 1)
        index = array.indexOf(numero)
        while(index != -1){ /* -1 quiere decir que no existe dentro del array*/ 
            numero = Math.floor(Math.random() * (91 - 1 ) + 1)
            index = array.indexOf(numero)
        }
        array[x] = numero
    }
    array.sort(function(a,b){return a-b;})
    console.log(array)
}

function numeroNuevo(array){
    let numero = 0;
    let index = 0;
    numero = Math.floor(Math.random() * (91 - 1 ) + 1)
    index = array.indexOf(numero)
    while(index === -1){
        numero = Math.floor(Math.random() * (91 - 1 ) + 1)
        index = array.indexOf(numero)
    }
    numeroSorteo.textContent = numero;
    array[index] = 0;
}

boton.addEventListener("click", () => numeroNuevo(arrayNumeros))






