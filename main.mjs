import { getNumber, getLetra, handleEventClick } from "./helpers.mjs"

export const letras = ['A', 'B', 'C', 'D', 'E', 'F']

const button = document.getElementById("button")
button.addEventListener("click", handleEventClick)