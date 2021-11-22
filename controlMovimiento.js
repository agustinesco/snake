let inputDireccion = {x:0,y:0} 
let ultimoInputDireccion = {x:0,y:0} 

window.addEventListener('keydown' , k=>{
    switch (k.key) {

        case "a":
            if(ultimoInputDireccion.x !== 0)  break
            inputDireccion= {x:-1 , y : 0}
            break;

        case "d":
            if(ultimoInputDireccion.x !== 0) break
            inputDireccion= {x:1 , y : 0}
            break;

        case "w":
            if(ultimoInputDireccion.y !== 0) break
            inputDireccion= {x:0 , y : -1}
            break;

        case "s":
            if(ultimoInputDireccion.y !== 0) break;
            inputDireccion= {x:0 , y : 1}
            break;
    }
})

export function getInput() {
    ultimoInputDireccion = inputDireccion
    return inputDireccion
}