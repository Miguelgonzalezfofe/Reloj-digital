
import { dosDigitos } from "../Javascript/main.js"
// alarmas.js

export const alarmas = []
export let containerAlarma = document.querySelector(".container_alarmas")
export let fechaNuevaAlarma = document.querySelector("#nuevoAlarma")
export let tiempoRestanteAlarmas = document.querySelector(".tiempoRestanteAlarmas")

// Función para inicializar el módulo y asignar eventos
export const inicializarAlarmas = () => {
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
}

// Función para iniciar las alarmas
export const inicioAlarma = () => {
    if (alarmas[0]) {
        ordenFechas()
        mostrarAlarmas()
        tiempoDeEspera()
    } else {
        tiempoRestanteAlarmas.textContent = "sin alarmas pendientes"
        containerAlarma.textContent = ""
    }
}

// Función para ordenar las fechas
export const ordenFechas = () => {
    return alarmas.sort((a, b) => a.getTime() - b.getTime())
}

// Función para mostrar las alarmas
export const mostrarAlarmas = () => {
    containerAlarma.innerHTML = ""
    if (alarmas[0]) {
        alarmas.forEach((time) => {
            let alarma = document.createElement("li")
            alarma.innerHTML = `
            <p>${dosDigitos(time.getDate())}/${dosDigitos(time.getMonth() + 1)}/${time.getFullYear()}</p>
            <p>${dosDigitos(time.getHours())}:${dosDigitos(time.getMinutes())}</p>
            `
            containerAlarma.appendChild(alarma)
        })
    }
}

// Función para controlar el tiempo de espera
export const tiempoDeEspera = () => {
    const ciclo = setInterval(() => {
        let primeraAlarma = alarmas[0]
        if (primeraAlarma) {
            let espera = new Date()
            let resultado = new Date(primeraAlarma.getTime() - espera.getTime())
            if (resultado < 0) {
                clearInterval(ciclo)
                alert("Se acabó el tiempo")
                alarmas.shift()
                inicioAlarma()
            } else {
                mostrarCuenta(resultado)
            }
        }
    }, 1000)
}

// Función para mostrar la cuenta regresiva
export const mostrarCuenta = (resultado) => {
    const minuto = 60000
    const hora = 3600000
    const dia = 86400000

    if (resultado.getTime() < minuto) {
        tiempoRestanteAlarmas.innerHTML = `00:00:${dosDigitos(resultado.getSeconds())}`
    }
    else if (resultado.getTime() > minuto && resultado.getTime() < hora) {
        tiempoRestanteAlarmas.innerHTML = `00:${dosDigitos(resultado.getMinutes())}:${dosDigitos(resultado.getSeconds())}`
    }
    else if (resultado.getTime() > hora && resultado.getTime() < dia) {
        tiempoRestanteAlarmas.innerHTML = `${dosDigitos(resultado.getUTCHours())}:${dosDigitos(resultado.getMinutes())}:${dosDigitos(resultado.getSeconds())}`
    }
    else if (resultado.getTime() > dia) {
        tiempoRestanteAlarmas.innerHTML = `${Math.floor(resultado.getTime() / dia)} días`
    }
}

