let comida = posAleatoria()
import {sobreSerpiente, agregarParte} from './snake.js';

export function update() { 
    if(sobreSerpiente(comida)){ 
        agregarParte()
        comida=posAleatoria() 
    }
}

export function dibujar(tablero) {
            const comidadiv = document.createElement('div')
            comidadiv.style.gridRow = comida.y
            comidadiv.style.gridColumn = comida.x
            comidadiv.classList.add('comida')
            tablero.appendChild(comidadiv)
}

function posAleatoria() {
    let nuevaPos = null
    while(nuevaPos == null || sobreSerpiente(nuevaPos)){
        nuevaPos = generarPos()
    }
    return nuevaPos
}
function generarPos() {
    let valorx = Math.floor((Math.random()*20)+1)
    let valory = Math.floor((Math.random()*20)+1)
    return {x:valorx , y:valory}
}