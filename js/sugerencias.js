// Formulario de sugerencias

const formSugerencia = document.querySelector("#form-sugerencia");
const modalContenedor = document.querySelector("#modal-contenedor");
const btnCerrarModal = document.querySelector("#cerrar-modal");

// Muestra o oculta mensajes de error
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

// Validaciones de campo genéricas
const validarCampo = (idCampo, validador, mensaje) => {
    const valor = document.querySelector(`#${idCampo}`).value.trim();
    const esValido = validador(valor);
    
    if (!esValido) {
        mostrarError(mensaje, idCampo);
        return false;
    }
    
    ocultarError(idCampo);
    return true;
}

const validarNombre = () => validarCampo("nombre", v => v !== "", "Ingresá tu nombre.");
const validarApellido = () => validarCampo("apellido", v => v !== "", "Ingresá tu apellido.");
const validarEdad = () => validarCampo("edad", v => !isNaN(v) && v !== "", "La edad debe ser un número válido.");
const validarEmail = () => validarCampo("email", v => v !== "" && v.includes("@") && v.includes("."), "El email no es válido.");
const validarTitulo = () => validarCampo("titulo", v => v !== "", "Ingresá el título del juego.");
const validarPlataforma = () => validarCampo("plataforma", v => v !== "", "Indicá la plataforma.");
const validarDescripcion = () => validarCampo("descripcion", v => v !== "", "Contanos por qué lo sugerís.");

const validarFormulario = (e) => {
    e.preventDefault();

    const esValido = validarNombre() && validarApellido() && validarEdad() && validarEmail() && 
                     validarTitulo() && validarPlataforma() && validarDescripcion();

    if (esValido) {
        formSugerencia.reset();
        modalContenedor.classList.remove("oculto");
    }
}

// Event listeners de validación al perder el foco
["nombre", "apellido", "edad", "email", "titulo", "plataforma", "descripcion"].forEach(campo => {
    const validator = eval(`validar${campo.charAt(0).toUpperCase() + campo.slice(1)}`);
    document.querySelector(`#${campo}`).addEventListener("blur", validator);
});

formSugerencia.addEventListener("submit", validarFormulario);

// Cierre del modal
btnCerrarModal.addEventListener("click", () => {
    modalContenedor.classList.add("oculto");
});

modalContenedor.addEventListener("click", (e) => {
    if (e.target === modalContenedor) {
        modalContenedor.classList.add("oculto");
    }
});