// CATALOGO

// Variables globales
let claveFavoritos = "juegosFavoritos";
let juegosFavoritos = getLocalStorage(claveFavoritos) || [];

let claveVotos = "votos";
const obtenerVotos = getLocalStorage(claveVotos) || {};

//selectores
const contenedorCatalogo = document.querySelector("#catalogo-contenedor");
const inputBuscador = document.querySelector("#buscador");
const buscadorCantidad = document.querySelector("#busqueda-cantidad");

const btnLimpiarFiltros = document.querySelector("#btn-limpiar-filtros");

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

//eventos
document.querySelector("#ordenar").addEventListener("change", aplicarFiltros);

btnLimpiarFiltros.addEventListener("click", limpiarFiltros);

["estadoAnimo", "duracion", "genero", "filtro-año-actual"].forEach(nombre => {
    document.querySelectorAll(`input[name='${nombre}']`)
        .forEach(radio => radio.addEventListener("change", aplicarFiltros));
});

inputBuscador.addEventListener("input", aplicarFiltros);

// Iniciadores
mostrarCatalogo(juegos);