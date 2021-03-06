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
        index = array.indexOf(numero)      
        while(index != -1){                 
            numero = Math.floor(Math.random() * (91 - 1 ) + 1)
            index = array.indexOf(numero)
        }
        array[x] = numero
    }
    showCard(array, tipo)
}

function showCard(array, tipo){
    for(let x = 0; x <= array.length-1; x++){    
        let p = document.createElement("p");     
        p.className = `number number${array[x]}`                                         
        p.textContent = array[x]                
        let div;

        if(x<=4){                  
            div = document.querySelector(`.container-row1-${tipo}`)
        }
        else if (x <= 9){          
            div = document.querySelector(`.container-row2-${tipo}`)
        }
        else if (x <= 14){         
            div = document.querySelector(`.container-row3-${tipo}`)
        }
        div.appendChild(p);
    }
}

boton.addEventListener("click", () => numeroNuevo())  

function numeroNuevo(){
    let numero = 0;
    let index = 0;
    numero = Math.floor(Math.random() * (91 - 1 ) + 1)
    index = arrayNumeros.indexOf(numero)
    while(index === -1){
        numero = Math.floor(Math.random() * (91 - 1 ) + 1)
        index = arrayNumeros.indexOf(numero)
    }
    arrayNumeros[index] = 0;    
                               
    numeroSorteo.textContent = numero;
    tacharNumero(numero);
}

function tacharNumero(numero){
    let borrar = document.querySelectorAll(`.number${numero}`)  
    borrar.forEach(element => {             
        element.classList.add("tachado")    
    });
    for(let i = 0; i <= 15; i++){  
        if(arrayJugador[i] === numero){     
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
    if(contador === 15){            
        alert(alerta);
        boton.remove();
        //window.location.reload()
    }
}






