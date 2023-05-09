import { letras } from "./main.mjs";

export const getNumber = () =>{
    // get a random from 1-10
    return Math.floor(Math.random() * 10)
}

export const getLetra = (letras) =>{
    // get a random letter from the array 0letras' 
    return letras[Math.floor(Math.random()*letras.length)];
}

export const handleEventClick = () =>{
    const elemento = document.createElement('div')
    document.body.appendChild(elemento)
    elemento.style.height = '50px'
    const color = []
    for (let i = 0; i < 6; i++) {
        const e = Math.random() < 0.5 ? getNumber() : getLetra(letras)
        color.push(e)
    }
    const hex = color.join('')
    console.log(hex)
    elemento.style.backgroundColor = '#' + hex
}