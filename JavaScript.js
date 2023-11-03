/*const btnEnviar = document.querySelector(".btn-enviar");
const form = document.querySelector("#form1");
const errores = document.querySelector(".mostrarErrores");
const divBoton = document.querySelector(".divboton");

let captarERROR = [];

const validar = () => {

    borrar();

    let nombre = document.querySelector("#Fn");
    let nombre2 = nombre.value.trim();

    let email = document.querySelector("#Fc");
    let email2 = email.value.trim();
    let verificarEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    let opciones = document.querySelector("#opciones");
    let opciones2 = opciones.value.trim();

    let mensaje = document.querySelector("#Fm");
    let mensaje2 = mensaje.value.trim();



    if (nombre2 == "") {
        captarERROR.push("Rellenar el campo Nombre");
    }

    if (nombre2.lenght > 40) {
        captarERROR.push("Nombre excedio la cantidad de caracteres");
    }

    if (email2 == "") {
        captarERROR.push("Email no tiene ningun dato");

    } else if (!verificarEmail.test(email2)) {

        captarERROR.push("Ingrese un Email valido");

    }

    if (opciones2 == 0) {
        captarERROR.push("Ingrese un continente");
    }


    if (mensaje2 == "") {
        captarERROR.push("No se ha ingresado ningun mensaje");
    }

    if (mensaje2.lenght > 500) {
        captarERROR.push("Se excedio la cantidad de caracteres");
    }

    if (captarERROR.length > 0) {
        for (let i = 0; i < captarERROR.length; i++) {

            let listaErrores = document.createElement("li");
            listaErrores.textContent=captarERROR[];
            listaErrores.style.listStyleType="none";
            listaErrores.style.color="red";
            listaErrores.style.textAlign="center";
            listaErrores.textContent = captarERROR[i];

            errores.appendChild(listaErrores);
        }

        return false;
    }

    divBoton.removeChild(btnEnviar);

    form.removeChild(errores);

    const enviado = document.createElement("p");
    enviado.textContent = "Mensaje enviado, Pronto nos contactaremos contigo al email: "+email2+ ", muchas gracias";
    enviado.style.color = "black";
    enviado.style.textAlign = "center";
    enviado.style.marginTop = "-10px";
    form.appendChild(enviado);

    nombre.disabled = true;
    email.disabled = true;
    opciones.disabled = true;
    mensaje.disabled = true;
    return false;
}


let borrar = () => {


    while (captarERROR.length > 0) {

        captarERROR.pop();
        errores.removeChild(errores.lastChild);
    }

}


const carrusel = document.querySelector(".carrusel-items");
let intervalo = null;
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let step = 1;
const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft === maxScrollLeft) {
            step = step * -1;
        } else if (carrusel.scrollLeft === 0) {
            step = step * -1;
        }
    }, 10);
};


const stop = () => {
    clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
    stop();
});

carrusel.addEventListener("mouseout", () => {
    start();
});



start();