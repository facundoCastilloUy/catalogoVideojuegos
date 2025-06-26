// Variables globales
let claveFavoritos = "juegosFavoritos";
let juegosFavoritos = getLocalStorage(claveFavoritos) || [];

let claveVotos = "votos";
const obtenerVotos = getLocalStorage(claveVotos) || {};

let ultimoIndice = -1;
let intervaloSlide;

// Selectores
const contenedorCatalogo = document.querySelector("#catalogo-contenedor");
const inputBuscador = document.querySelector("#buscador");
const buscadorCantidad = document.querySelector("#busqueda-cantidad");

const btnLimpiarFiltros = document.querySelector("#btn-limpiar-filtros");

const formSugerencia = document.querySelector("#form-sugerencia");
const modalContenedor = document.querySelector("#modal-contenedor");
const btnCerrarModal = document.querySelector("#cerrar-modal");


// Funciones

//// HOME ////

// Slider //
// funcion para obtener un juego aleatorio
const obtenerJuegoAleatorio = () => {
    let indiceAleatorio;

    do {
        indiceAleatorio = Math.floor(Math.random() * juegos.length);
    } while (indiceAleatorio === ultimoIndice);

    ultimoIndice = indiceAleatorio;
    return juegos[indiceAleatorio];
}

// genera el slide con datos de mi array de juegos
const mostrarSlide = (juego) => {
    const slide = document.querySelector("#slide");
    slide.innerHTML = `
    <img src="${juego.imagenes.imgSlide}" alt="${juego.nombre}">
    <div class="slide-info">
         <h2>${juego.nombre}</h2>
         <p>${juego.descripcion}</p>
    </div>
    `;
}

// cambia de slide
const actualizarSlide = () => {
    const juego = obtenerJuegoAleatorio();
    mostrarSlide(juego);
}

// iniciar el slider
const iniciarSlider = () => {
    actualizarSlide();
    intervaloSlide = setInterval(actualizarSlide, 5000);
}

// CATALOGO

// Renderizar el catálogo completo de juegos
const mostrarCatalogo = (listado) => {
    contenedorCatalogo.innerHTML = ""; // limpio el contenedor antes de cargar

    listado.forEach((juego) => {
        const esfavorito = juegosFavoritos.includes(juego.id); // verifico si es favorito

        const votosGuardados = obtenerVotos;
        juego.votos = votosGuardados[juego.id] || 0; // asigno los votos guardados en localSorage ó 0.

        // creo la card
        const card = document.createElement("a");
        card.href = `detalle.html?id=${juego.id}`;
        card.classList.add("card");
        if (esfavorito) card.classList.add("favorito");

        card.innerHTML = `
        <button class="btn-favorito">❤️</button>
        <img src="${juego.imagenes.imgCard}" alt="${juego.nombre}">
        <div class="card-info">
        <h3>${juego.nombre}</h3>
        <p>${juego.descripcion}</p>
        <div class="votos">
            <button class="btn-downvote">⬇️</button>
            <p class="votos-contador">${juego.votos}</p>
            <button class="btn-upvote">⬆️</button>
        </div>
        </div>
        `;

        // botón de favorito
        card.querySelector(".btn-favorito").addEventListener("click", (e) => {
            e.preventDefault();
            if (esfavorito) {
                juegosFavoritos = juegosFavoritos.filter((fav) => fav !== juego.id);
            } else {
                juegosFavoritos.push(juego.id);
            }
            setLocalStorage(claveFavoritos, juegosFavoritos);
            aplicarFiltros(); // recargo catálogo con cambios
        });

        // click en upvote
        card.querySelector(".btn-upvote").addEventListener("click", (e) => {
            e.preventDefault();
            const nuevoTotal = votarJuego(juego.id, 1);
            juego.votos = nuevoTotal;
            const contador = card.querySelector(".votos-contador");
            contador.textContent = nuevoTotal;
        });

        // click en downvote
        card.querySelector(".btn-downvote").addEventListener("click", (e) => {
            e.preventDefault();
            const nuevoTotal = votarJuego(juego.id, -1);
            juego.votos = nuevoTotal;
            const contador = card.querySelector(".votos-contador");
            contador.textContent = nuevoTotal;
        });

        // agrego la card
        contenedorCatalogo.append(card);
    });
};

// función para votar un juego
const votarJuego = (id, cambio) => {
    const votos = obtenerVotos;
    if (!votos[id]) votos[id] = 0;
    votos[id] += cambio;
    setLocalStorage(claveVotos, votos);
    return votos[id];
};

// filtros del sidebar
const aplicarFiltros = () => {
    const estadoSeleccionado = document.querySelector(".filtro-estado:checked").value;
    const duracionSeleccionada = document.querySelector(".filtro-duracion:checked").value;
    const generoSeleccionado = document.querySelector(".filtro-genero:checked").value;
    const ordenSeleccionado = document.querySelector("#ordenar").value;
    const soloEsteAño = document.querySelector("#filtro-año-actual");
    const textoBuscado = inputBuscador.value.toLowerCase().trim();

    let juegosFiltrados = juegos.slice();

    // filtros por estado de animo, duracion, genero, año.
    if (estadoSeleccionado !== "todos") {
        juegosFiltrados = juegosFiltrados.filter((juego) => juego.estadoAnimo === estadoSeleccionado);
    };

    if (duracionSeleccionada !== "todas") {
        juegosFiltrados = juegosFiltrados.filter((juego) => juego.duracion === duracionSeleccionada);
    }

    if (generoSeleccionado !== "todos") {
        juegosFiltrados = juegosFiltrados.filter((juego) => juego.genero === generoSeleccionado);
    }

    if (soloEsteAño.checked) {
        const añoActual = new Date().getFullYear();
        juegosFiltrados = juegosFiltrados.filter((juego) => juego.lanzamiento === añoActual);
    }

    // filtro de texto en tiempo real (nombre, estudio, genero, plataforma)
    if (textoBuscado !== "") {
        juegosFiltrados = juegosFiltrados.filter((juego) =>
            juego.nombre.toLowerCase().includes(textoBuscado) ||
            juego.estudio.nombre.toLowerCase().includes(textoBuscado) ||
            juego.genero.toLowerCase().includes(textoBuscado) ||
            juego.plataformas.some(plataforma => plataforma.toLowerCase().includes(textoBuscado))
        )
    }

    // orden segun el select
    switch (ordenSeleccionado) {
        case "favoritos":
            juegosFiltrados = juegosFiltrados.filter((juego) => juegosFavoritos.includes(juego.id));
            break;
        case "mas-votado":
            juegosFiltrados.sort((a, b) => b.votos - a.votos);
            break;
        case "menos-votado":
            juegosFiltrados.sort((a, b) => a.votos - b.votos);
            break;
        case "nombre-a-z":
            juegosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case "nombre-z-a":
            juegosFiltrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
            break;
    }

    // si no hay juegos, mostrar un mensaje y salir
    if (juegosFiltrados.length === 0) {
        contenedorCatalogo.innerHTML = `
        <p>No se encontraron juegos que coincidan con los filtros seleccionados</p>
        `;
        return;
    }

    if (textoBuscado != "") {
        buscadorCantidad.textContent = `${juegosFiltrados.length} Resultados`;
    } else {
        buscadorCantidad.textContent = "";
    }

    mostrarCatalogo(juegosFiltrados);
}

// limpiar filtros
const limpiarFiltros = () => {
    inputBuscador.value = "";
    document.querySelector("#ordenar").value = "";
    document.querySelector("input[name='estadoAnimo'][value='todos']").checked = true;
    document.querySelector("input[name='duracion'][value='todas']").checked = true;
    document.querySelector("input[name='genero'][value='todos']").checked = true;
    document.querySelector("input[name='filtro-año-actual']").checked = false;
    aplicarFiltros();
}

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

    if(esValido){
        formSugerencia.reset();
        modalContenedor.classList.remove("oculto");
    }
}

// Eventos
document.querySelector("#ordenar").addEventListener("change", aplicarFiltros);

btnLimpiarFiltros.addEventListener("click", limpiarFiltros);

["estadoAnimo", "duracion", "genero", "filtro-año-actual"].forEach(nombre => {
    document.querySelectorAll(`input[name='${nombre}']`)
        .forEach(radio => radio.addEventListener("change", aplicarFiltros));
});

inputBuscador.addEventListener("input", aplicarFiltros);

// Eventos del formulario
document.querySelector("#nombre").addEventListener("blur", validarNombre);
document.querySelector("#apellido").addEventListener("blur", validarApellido);
document.querySelector("#edad").addEventListener("blur", validarEdad);
document.querySelector("#email").addEventListener("blur", validarEmail);
document.querySelector("#titulo").addEventListener("blur", validarTitulo);
document.querySelector("#plataforma").addEventListener("blur", validarPlataforma);
document.querySelector("#descripcion").addEventListener("blur", validarDescripcion);
form.addEventListener("submit", validarFormulario);

// Iniciadores
mostrarCatalogo(juegos);

