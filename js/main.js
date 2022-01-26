const arrayNumeros = Array(90)
const arrayJugador = Array(15)
const arrayCPU = Array(15)

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
        numero = Math.floor(Math.random() * (90 - 1 ) + 1)
        index = array.indexOf(numero)
        while(index != -1){
            numero = Math.floor(Math.random() * (91 - 1 ) + 1)
            index = array.indexOf(numero)
        }
        array[x] = numero
    }
    array.sort(function(a,b){return a-b;})
    console.log(array)
}




