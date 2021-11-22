export const _velocidadSerpiente = 5
let cuerpoSerpiente = [
    {x:11 , y:11},
]
let movimiento = {x:0,y:0}
let siguienteMovimiento = {x:0,y:0}
import {getInput} from './controlMovimiento.js';

export function update() { 
        for(let i = cuerpoSerpiente.length-2; i>=0 ; i--){
            cuerpoSerpiente[i+1] = { ...cuerpoSerpiente[i] }
        }
        cuerpoSerpiente[0].x +=movimiento.x
        cuerpoSerpiente[0].y +=movimiento.y
        movimiento=getInput()
}

export function dibujar(tablero) {
        cuerpoSerpiente.forEach(parte =>{
            const parteSerpiente = document.createElement('div')
            parteSerpiente.style.gridRow = parte.y
            parteSerpiente.style.gridColumn = parte.x
            parteSerpiente.classList.add('snake')
            tablero.appendChild(parteSerpiente)
        })
}

export function sobreSerpiente(posicion) {
        return cuerpoSerpiente.some(parte => {
            return mismaPosicion(posicion,parte)
        })
}

export function agregarParte() {
    cuerpoSerpiente.push({ ...cuerpoSerpiente[cuerpoSerpiente.length-1] })
}

function mismaPosicion(pos1,pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

export function revisarPerdio(){
    return fueraTablero() || cabezaInterseca()
}

function fueraTablero() {
    let parte = cuerpoSerpiente[0]
    return parte.y <1 || parte.y >21 || parte.x <1 || parte.x >21
}

function cabezaInterseca() {
    let ret = false
    for (let i = 1; i < cuerpoSerpiente.length; i++) {
        ret = mismaPosicion(cuerpoSerpiente[0],cuerpoSerpiente[i]) || ret
    }
    return ret
}

export function largoSerpiente(){
    return cuerpoSerpiente.length
}