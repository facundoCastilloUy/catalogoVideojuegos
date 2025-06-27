// Selectores
const formSugerencia = document.querySelector("#form-sugerencia");
const modalContenedor = document.querySelector("#modal-contenedor");
const btnCerrarModal = document.querySelector("#cerrar-modal");

// ERRORES
const mostrarError = (mensaje, idCampo) => {
    const campoError = document.querySelector(`#error-${idCampo}`);
    campoError.textContent = mensaje;
    campoError.classList.remove("oculto");
}

const ocultarError = (idCampo) => {
    const campoError = document.querySelector(`#error-${idCampo}`);
    campoError.textContent = "";
    campoError.classList.add("oculto");
}

// FORMULARIO

// validacion
const validarNombre = () => {
    const nombre = document.querySelector("#nombre").value.trim();

    if (!nombre) {
        mostrarError("Ingresá tu nombre.", "nombre");
        return false;
    }

    ocultarError("nombre");
    return true;
}

const validarApellido = () => {
    const apellido = document.querySelector("#apellido").value.trim();

    if (!apellido) {
        mostrarError("Ingresá tu apellido.", "apellido");
        return false;
    }

    ocultarError("apellido");
    return true;
}

const validarEdad = () => {
    const edad = document.querySelector("#edad").value.trim();

    if (isNaN(edad)) {
        mostrarError("La edad debe ser un número", "edad");
        return false;
    }

    if (!edad) {
        mostrarError("Ingresá tu edad.", "edad");
        return false;
    }

    ocultarError("edad");
    return true;
}

const validarEmail = () => {
    const email = document.querySelector("#email").value.trim();

    if (!email) {
        mostrarError("Ingresá tu email.", "email");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mostrarError("El email no es válido.", "email")
        return false;
    }

    ocultarError("email");
    return true;
}

const validarTitulo = () => {
    const titulo = document.querySelector("#titulo").value.trim();

    if (!titulo) {
        mostrarError("Ingresá el título del juego.", "titulo");
        return false;
    }

    ocultarError("titulo");
    return true;
}

const validarPlataforma = () => {
    const plataforma = document.querySelector("#plataforma").value.trim();

    if (!plataforma) {
        mostrarError("Indicá la plataforma.", "plataforma");
        return false;
    }

    ocultarError("plataforma");
    return true;
}

const validarDescripcion = () => {
    const descripcion = document.querySelector("#descripcion").value.trim();

    if (!descripcion) {
        mostrarError("Contanos por qué lo sugerís.", "descripcion");
        return false;
    }

    ocultarError("descripcion");
    return true;
}

const validarFormulario = (e) => {
    e.preventDefault();

    const esValido = validarNombre() && validarApellido() && validarEdad() && validarEmail() && validarTitulo() && validarPlataforma() && validarDescripcion();

    if (esValido) {
        formSugerencia.reset();
        modalContenedor.classList.remove("oculto");
    }
}

// Eventos del formulario
document.querySelector("#nombre").addEventListener("blur", validarNombre);
document.querySelector("#apellido").addEventListener("blur", validarApellido);
document.querySelector("#edad").addEventListener("blur", validarEdad);
document.querySelector("#email").addEventListener("blur", validarEmail);
document.querySelector("#titulo").addEventListener("blur", validarTitulo);
document.querySelector("#plataforma").addEventListener("blur", validarPlataforma);
document.querySelector("#descripcion").addEventListener("blur", validarDescripcion);
formSugerencia.addEventListener("submit", validarFormulario);

// Eventos de la ventana modal
btnCerrarModal.addEventListener("click",()=>{
    modalContenedor.classList.add("oculto");
});

modalContenedor.addEventListener("click", (e)=>{
    if(e.target === modalContenedor){
        modalContenedor.classList.add("oculto");
    };
})