const btnEnviar = document.querySelector(".btn-enviar");
const formul = document.querySelector("#form1");
const errores1 = document.querySelector(".mostrarErrores");
const divboton = document.querySelector(".divBoton");

let mostrarErrores = [];

const validar = () => {

    borrarErrores();

    let fNombre = document.querySelector("#fN");
    let nombre = fNombre.value.trim();

    let fCorreo = document.querySelector("#fC");
    let correo = fCorreo.value.trim();
    let validacionCorreo = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    let fOpciones = document.querySelector("#fOciones");
    let opciones = fOpciones.value.trim();

    let fMensaje = document.querySelector("#fM");
    let mensaje = fMensaje.value.trim();

    if (nombre == "") {

        mostrarErrores.push("Nombre vacio.");

    }

    if (nombre.length > 40) {

        mostrarErrores.push("El nombre supero los 40 caracteres.");

    }

    if (correo == "") {

        mostrarErrores.push("No ingresaste un correo.");

    } else if (!validacionCorreo.test(correo)) {

        mostrarErrores.push("No cumple el formato de Correo.");
    }


    if (opciones == 0) {
        mostrarErrores.push("Ingrese un continente. ");
    }


    if (mensaje == "") {

        mostrarErrores.push("No ingresaste ningun mensaje. ");

    }

    if (mensaje.length > 500) {
        mostrarErrores.push("El mensaje excedio los 500 caracteres.");
    }

    if (mostrarErrores.length > 0) {

        for (let i = 0; i < mostrarErrores.length; i++) {

            let listadoDeErrores = document.createElement("li");
            listadoDeErrores.textContent = mostrarErrores[i];
            listadoDeErrores.style.listStyleType = "none";
            listadoDeErrores.style.color = "red";
            listadoDeErrores.style.textAlign = "center";

            errores1.appendChild(listadoDeErrores);
        }
        return false;
    }

    divboton.removeChild(btnEnviar);
    formul.removeChild(errores1);

    const parrafo = document.createElement("p");
    parrafo.textContent = "Gracias pronto nos pondremos en contacto contigo al correo: " + correo + ", muchas gracias!";
    parrafo.style.textAlign = "center";
    parrafo.style.backgroundColor = "black";
    parrafo.style.color = "white";
    parrafo.style.marginTop = "10px";
    formul.appendChild(parrafo);

    fNombre.disable = true;
    fCorreo.disable = true;
    fOpciones.disable = true;
    fMensaje.disable = true;

    return false;

}

let borrarErrores = () => {

    while (mostrarErrores.length > 0) {
        mostrarErrores.pop();
        errores1.removeChild(errores1.lastChild)


    }


}





//Carrousel de imagenes
let arregloImag = ['Img/Carrousel/1.jpg', 'Img/Carrousel/2.jpg', 'Img/Carrousel/3.jpg', 'Img/Carrousel/4.jpg', 'Img/Carrousel/5.jpg', 'Img/Carrousel/6.jpg'];
let imgCarrusel = document.querySelector(".imgCar");
let botonIzq = document.querySelector(".botonIz");
let botonDer = document.querySelector(".botonDe");
let index = 0;

botonIzq.addEventListener("click", () => {

    if (index == arregloImag.length - 1) {
        index = 0;
    } else {

        index++;

    }
    imgCarrusel.src = arregloImag[index];

})

botonDer.addEventListener("click", () => {

    if (index == 0) {
        index = arregloImag.length - 1;
    } else {

        index--;

    }
    imgCarrusel.src = arregloImag[index];

})

start();