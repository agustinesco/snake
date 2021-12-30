const tablero = document.querySelector(".tablero")
let tiempoUltimoRender = 0
let gameOver=false
let puntos = document.querySelector('.puntos-numero')

import { _velocidadSerpiente , update as updateSnake , dibujar as dibujarSnake , revisarPerdio,largoSerpiente} from "./snake.js";
import { update as updateComida , dibujar as dibujarComida } from "./comida.js";



function main(tiempoActual) {
    if(gameOver){
        if(confirm("Presiona aceptar para volver a jugar")){
            window.location = 'https://agustinesco.github.io/snake-html/' //refresca la pagina 
        }else{
            return
        }
    }

    else{
    window.requestAnimationFrame(main)

    const segundosDesdeUltimoRender = (tiempoActual - tiempoUltimoRender)/1000 //divido por 1000 ya que está en milisegundos
    if(segundosDesdeUltimoRender < 1/_velocidadSerpiente) return

    tiempoUltimoRender = tiempoActual

    update()
    acutalizarPuntos()
    dibujar()
    gameOver = revisarPerdio()
    }
}

window.requestAnimationFrame(main)

function update() {
    updateComida()
    updateSnake()
    
}

function dibujar() {
    tablero.innerHTML = ""
    dibujarComida(tablero)
    dibujarSnake(tablero)
}

function acutalizarPuntos() {
    puntos.innerHTML = largoSerpiente() -1
}