const arrayNumeros = Array(90)
const arrayJugador = Array(15)
const arrayCPU = Array(15)
const boton = document.querySelector(".boton")
const numeroSorteo = document.querySelector(".numero-sorteo")
let contadorJugador = 0;
let contadorCPU = 0;

rellenarBombo()
createCard(arrayJugador,"jugador")
createCard(arrayCPU,"cpu")

function rellenarBombo (){
    for(let i = 1; i <= arrayNumeros.length; i++){
        arrayNumeros[i-1] = i;
    }
}

function createCard(array,tipo){
    let numero = 0;
    let index = 0;
    for(let x = 0; x <= array.length-1; x++){
        numero = Math.floor(Math.random() * (91 - 1 ) + 1)
        index = array.indexOf(numero)       //Si devuelve -1 quiere decir que el numero que buscamos no está dentro de la array.
        while(index != -1){                 //Si el index es diferente a -1 (osea que existe ese numero dentro de la array), volvemos a sacar un número diferente.
            numero = Math.floor(Math.random() * (91 - 1 ) + 1)
            index = array.indexOf(numero)
        }
        array[x] = numero
    }
    array.sort(function(a,b){return a-b;})  //Ordenamos lo numero de la array de menor a mayor
    showCard(array, tipo)
}

function showCard(array, tipo){
    for(let x = 0; x <= array.length-1; x++){    //Hacemmos un bucle que recorra toda la array y que por cada iteración cree un 'p' para mostrar el número.
        let p = document.createElement("p");     //Creamos elemento.
        p.className = `number number${array[x]}` //Le asignamos la clase 'number' y al mismo tiempo le asignamos una segunda clase number+'el propio numero'. 
                                                //Con esto lo que conseguimos hacer es crear un <p> y asignarle una clase ÚNICA a ese número(para así poderlo seleccionar de manera única)
        p.textContent = array[x]                 //Le asignamos el número de la array al text content y así mostrarlo en la web.
        let div;

        //Sabiendo que cada jugador tiene 15 números y que he decidido que quiero que se vean en 3 líneas, decidí crear en el archivo html 3 divs que formasen la cartilla del jugador y 
        // otros 3 que formasen la cartilla de la cpu. (.container-row1,2,3-jugador .container-row1,2,3-cpu)
        //Para insertar los número en los correspondientes divs he hecho lo siguiente:
        if(x<=4){                  //Si estamos en las 5 primeras iteraciones del bucle, quiere decir que estamos en la primera línea (los primeros 5 números) de la cartilla del jugador.
            div = document.querySelector(`.container-row1-${tipo}`)//La variable 'tipo' es un string que pasamos al principio  y dependiendo de como lo llamos puede ser "jugador" o "cpu".
        }
        else if (x <= 9){          //Estamos entre la iteración 5 y 9 ( row 2)
            div = document.querySelector(`.container-row2-${tipo}`)
        }
        else if (x <= 14){         //Iteración 10 y 14 (row3)
            div = document.querySelector(`.container-row3-${tipo}`)
        }
        div.appendChild(p);//Teniendo ya el div que nos interesa seleccionado, le poner dentro la 'p' que creamos al principio de la funcion (que contiene el número que queremos mostrar).
    }
}

boton.addEventListener("click", () => numeroNuevo())  //Cada vez que se pincha en el botón, se llama a la funcion numeroNuevo()

function numeroNuevo(){
    let numero = 0;
    let index = 0;
    numero = Math.floor(Math.random() * (91 - 1 ) + 1)
    index = arrayNumeros.indexOf(numero)
    while(index === -1){
        numero = Math.floor(Math.random() * (91 - 1 ) + 1)
        index = arrayNumeros.indexOf(numero)
    }
    arrayNumeros[index] = 0;   //Para "borrar" el número y que no vuelva a salir lo cambiamos por un 0 y así, cuando hagamos el math.random y miremos si existe ese número en la array 
                               // no lo encontraremos y tendremos que volver a hacer otro math.random hatsa que salga un número que si que esté en la array.
    numeroSorteo.textContent = numero;
    tacharNumero(numero);
}

function tacharNumero(numero){
    let borrar = document.querySelectorAll(`.number${numero}`)  //Aquí usamos la clase ÚNICA que asignamos a la <p>. Seleccionamos todos los elementos con la clase <p>
    borrar.forEach(element => {             //Por cada elemento seleccionado (borrar.)
        element.classList.add("tachado")    //Asignamos la clase tachado a ese <p> que estamos tratando. Esta clase imprime una línea roja por encima.
    });
    for(let i = 0; i <= 15; i++){  
        if(arrayJugador[i] === numero){     //Cada vez que encontramoos el número dentro de la array del jugador/cpu, sumamos +1 al contador del jugador o cpu.
            contadorJugador++;
            checkWinner(contadorJugador, "Has ganado :)")
        }
        if(arrayCPU[i] === numero){
            contadorCPU++;
            checkWinner(contadorCPU, "Has perdido :(")
        }     
    }
}

function checkWinner(contador, alerta){
    if(contador === 15){            //Si el contador del jugador o cpu llega a 15, quiere decir que habrá ganado.
        alert(alerta);
        boton.remove();
        //window.location.reload()
    }
}






