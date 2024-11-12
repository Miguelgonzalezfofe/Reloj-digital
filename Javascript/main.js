
/* script de Inicio de pagina */
const laHora = document.querySelector(".hora")
const losMinutos = document.querySelector(".minutos")
const losSegundos = document.querySelector(".segundos")
let tiempoActual = document.querySelector(".timepoActual")

export const dosDigitos = (value) => {
    return value.toString().padStart(2, "0")
}

const horarioInicio = () => {
    const tiempo = new Date()
    const hora = tiempo.getHours()
    const minutos = tiempo.getMinutes()
    const segundos = tiempo.getSeconds()

    tiempoActual.textContent = `${dosDigitos(hora)}:${dosDigitos(minutos)}:${dosDigitos(segundos)}`

}
if (laHora && losMinutos && losSegundos) {
    setInterval(() => {
        horarioInicio()
    }, 1000)
}
import {
    inicializarAlarmas,
    inicioAlarma,
    mostrarCuenta,
    tiempoDeEspera,
    mostrarAlarmas,
} from "./alarma.js";

document.addEventListener("DOMContentLoaded", () => {
    inicializarAlarmas();
});

/* ****************************************** *//* 
const alarmas = []
const containerAlarma = document.querySelector(".container_alarmas")
let fechaNuevaAlarma = document.querySelector("#nuevoAlarma")
const tiempoRestanteAlarmas = document.querySelector(".tiempoRestanteAlarmas")

if (containerAlarma && fechaNuevaAlarma) {

    const btnAgregarAlarma = document.querySelector(".btnAgregarAlarma")
    btnAgregarAlarma.addEventListener("click", () => {
        if (!fechaNuevaAlarma.value) {
            return
        } else {
            alarmas.push(new Date(fechaNuevaAlarma.value))
            containerAlarma.textContent = ""
            fechaNuevaAlarma.value = ""
            inicioAlarma()
        }
    })
}

const inicioAlarma = () => {
    if (alarmas[0]) {
        ordenFechas()
        mostrarAlarmas()
        tiempoDeEspera()
    } else {
        tiempoRestanteAlarmas.textContent = "sin alarmas pendientes"
    }
}

const ordenFechas = () => {
    return alarmas.sort((a, b) => a.getTime() - b.getTime())
}

const mostrarAlarmas = () => {
    containerAlarma.innerHTML = ""
    if (alarmas[0]) {
        alarmas.forEach((time) => {
            let alarma = document.createElement("li")
            alarma.innerHTML = `
            <p>${dosDigitos(time.getDate())}/${dosDigitos(time.getMonth())}/${time.getFullYear()}</p>
            <p>${dosDigitos(time.getHours())}:${dosDigitos(time.getMinutes())}</p>
            `
            containerAlarma.appendChild(alarma)
        })
    } else {
        containerAlarma.innerHTML = ""
        clearInterval(ciclo)
    }

}
const tiempoDeEspera = () => {
    const ciclo = setInterval(() => {
        let primeraAlarma = alarmas[0]
        if (primeraAlarma) {
            let espera = new Date()
            let resultado = new Date(primeraAlarma.getTime() - espera.getTime())
            if (resultado < 0) {
                clearInterval(ciclo)
                alert("Se acabo el tiempo")
                alarmas.shift()
                inicioAlarma()

            } else {
                mostrarCuenta(resultado)

            }
        }


    }, 1000)

}
const mostrarCuenta = (resultado) => {
    const minuto = 60000
    const hora = 3600000
    const dia = 86400000

    if (resultado.getTime() < minuto) {
        tiempoRestanteAlarmas.innerHTML = `00:00:${dosDigitos(resultado.getSeconds())}`
    }
    else if (resultado.getTime() > minuto && resultado < hora) {
        tiempoRestanteAlarmas.innerHTML = `00:${dosDigitos(resultado.getMinutes())}:${dosDigitos(resultado.getSeconds())}`
    }
    else if (resultado.getTime() > hora && resultado.getTime() < dia) {
        tiempoRestanteAlarmas.innerHTML = `${dosDigitos(resultado.getUTCHours())}:${dosDigitos(resultado.getMinutes())}:${dosDigitos(resultado.getSeconds())}`
    }
    else if (resultado.getTime() > dia) {
        tiempoRestanteAlarmas.innerHTML = `${Math.floor(resultado.getTime() / dia)} dias`
    }

}
 */