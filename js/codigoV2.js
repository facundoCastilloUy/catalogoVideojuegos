// Variables globales
let claveFavoritos = "juegosFavoritos";
let juegosFavoritos = getLocalStorage(claveFavoritos) || [];

let claveVotos = "votos";
const obtenerVotos = getLocalStorage(claveVotos) || {};

// Selectores
const contenedorCatalogo = document.querySelector("#catalogo");

// Funciones
const mostrarCatalogo = (listado) => {
    contenedorCatalogo.innerHTML = "";

    listado.forEach((juego) => {
        const esfavorito = juegosFavoritos.includes(juego.id);
        const votosGuardados = obtenerVotos;
        juego.votos = votosGuardados[juego.id] ?? 0;

        const card = document.createElement("a");
        card.href = `detalle.html?id=${juego.id}`;
        card.classList.add("card");
        if (esfavorito) card.classList.add("favorito");

        card.innerHTML = `
        <button class="btn-favorito">❤️</button>
        <img src="${juego.imagenes.imgCard}" alt="${juego.nombre}">
        <h3>${juego.nombre}</h3>
        <p>${juego.descripcion}</p>
        <div class="votos">
        <button class="btn-downvote">⬇️</button>
        <p class="votos-contador">${juego.votos}</p>
        <button class="btn-upvote">⬆️</button>
        </div>
        `

        card.querySelector(".btn-favorito").addEventListener("click", (e) => {
            e.preventDefault();
            if (esfavorito) {
                juegosFavoritos = juegosFavoritos.filter((fav) => fav !== juego.id)
            } else {
                juegosFavoritos.push(juego.id);
            }
            console.log(juegosFavoritos);
            setLocalStorage(claveFavoritos, juegosFavoritos);
            mostrarCatalogo(listado);
        })

        card.querySelector(".btn-upvote").addEventListener("click", (e) => {
            e.preventDefault();
            const nuevoTotal = votarJuego(juego.id, 1);
            juego.votos = nuevoTotal;

            const contador = card.querySelector(".votos-contador");
            contador.textContent = nuevoTotal;
        })

        card.querySelector(".btn-downvote").addEventListener("click", (e) => {
            e.preventDefault();
            const nuevoTotal = votarJuego(juego.id, -1);
            juego.votos = nuevoTotal;

            const contador = card.querySelector(".votos-contador");
            contador.textContent = nuevoTotal;
        })

        contenedorCatalogo.append(card)
    });
};

const votarJuego = (id, cambio) => {
    const votos = obtenerVotos;
    if (!votos[id]) votos[id] = 0;
    votos[id] += cambio;
    setLocalStorage(claveVotos, votos);
    return votos[id];
}

const aplicarFiltros = () => {
    const estadoSeleccionado = document.querySelector("input[name='estadoAnimo']:checked").value;
    const duracionSeleccionada = document.querySelector("input[name='duracion']:checked").value;
    const generoSeleccionado = document.querySelector("input[name='genero']:checked").value;
    const ordenSeleccionado = document.querySelector("#ordenar").value;
    const soloEsteAño = document.querySelector("#filtro-año-actual");

    let juegosFiltrados = juegos.slice();

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

    if (juegosFiltrados.length === 0) {
        contenedorCatalogo.innerHTML = `
        <p>No se encontraron juegos que coincidan con los filtros seleccionados</p>
        `;
        return;
    }

    mostrarCatalogo(juegosFiltrados);
}

const limpiarFiltros = () => {
    document.querySelector("#ordenar").value = "";
    document.querySelector("input[name='estadoAnimo'][value='todos']").checked = true;
    document.querySelector("input[name='duracion'][value='todas']").checked = true;
    document.querySelector("input[name='genero'][value='todos']").checked = true;
    soloEsteAño.checked = false;
    aplicarFiltros();
}

// Eventos
document.querySelector("#ordenar").addEventListener("change", aplicarFiltros);

["estadoAnimo", "duracion", "genero"].forEach(nombre => {
    document.querySelectorAll(`input[name='${nombre}']`)
        .forEach(radio => radio.addEventListener("change", aplicarFiltros));
});

soloEsteAño.addEventListener("change", aplicarFiltros);

const btnLimpiarFiltros = document.querySelector("#btn-limpiar-filtros");
btnLimpiarFiltros.addEventListener("click", limpiarFiltros)


// Iniciadores
mostrarCatalogo(juegos);