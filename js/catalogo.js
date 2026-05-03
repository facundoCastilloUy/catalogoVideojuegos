// CATALOGO

// Variables globales
let claveFavoritos = "juegosFavoritos";
let juegosFavoritos = getLocalStorage(claveFavoritos) || [];

let claveVotos = "votos";
const obtenerVotos = getLocalStorage(claveVotos) || {};

//selectores
const contenedorCatalogo = document.querySelector("#catalogo-contenedor");
const buscadorCantidad = document.querySelector("#busqueda-cantidad");

// Renderizar el catálogo completo de juegos
const mostrarCatalogo = (listado, contenedor = contenedorCatalogo) => {
    contenedor.innerHTML = "";

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
        <button class="btn-favorito" type="button" aria-label="Agregar o quitar ${juego.nombre} de favoritos">
            <span class="material-symbols-rounded">favorite</span>
        </button>
        <img src="${juego.imagenes.imgCard}" alt="${juego.nombre}">
        <div class="card-info">
        <h3>${juego.nombre}</h3>
        <p>${juego.descripcion}</p>
        <div class="votos">
            <button class="btn-downvote voto-boton voto-negativo" type="button" aria-label="Restar voto a ${juego.nombre}">
                <span class="material-symbols-rounded">arrow_downward</span>
            </button>
            <p class="votos-contador">${juego.votos}</p>
            <button class="btn-upvote voto-boton voto-positivo" type="button" aria-label="Sumar voto a ${juego.nombre}">
                <span class="material-symbols-rounded">arrow_upward</span>
            </button>
        </div>
        </div>
        `;

        // botón de favorito
        card.querySelector(".btn-favorito").addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            const yaEsFavorito = juegosFavoritos.includes(juego.id);

            if (yaEsFavorito) {
                juegosFavoritos = juegosFavoritos.filter((fav) => fav !== juego.id);
                card.classList.remove("favorito");
            } else {
                juegosFavoritos.push(juego.id);
                card.classList.add("favorito");
            }

            setLocalStorage(claveFavoritos, juegosFavoritos);

            // En catálogo, si estoy viendo solo favoritos, conviene actualizar la grilla.
            // En home y detalle no existen filtros, así que no se fuerza un re-render.
            if (contenedorCatalogo && document.querySelector("#ordenar")?.value === "favoritos") {
                aplicarFiltros();
            }
        });

        // click en upvote
        card.querySelector(".btn-upvote").addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const nuevoTotal = votarJuego(juego.id, 1);
            juego.votos = nuevoTotal;
            const contador = card.querySelector(".votos-contador");
            contador.textContent = nuevoTotal;
        });

        // click en downvote
        card.querySelector(".btn-downvote").addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const nuevoTotal = votarJuego(juego.id, -1);
            juego.votos = nuevoTotal;
            const contador = card.querySelector(".votos-contador");
            contador.textContent = nuevoTotal;
        });

        // agrego la card
        contenedor.append(card);
    });
};

// obtener los 5 mas votados
const obtenerMasVotados = () => {
    const votos = obtenerVotos;
    return juegos
        .slice()
        .sort((a, b) => (votos[b.id] || 0) - (votos[a.id] || 0))
        .slice(0, 5);
};

// obtener 5 juegos aleatorios
const obtenerJuegosAleatorios = (cantidad = 5) => {
    const copia = juegos.slice();
    const resultado = [];

    while (resultado.length < cantidad && copia.length > 0) {
        const indice = Math.floor(Math.random() * copia.length);
        resultado.push(copia.splice(indice, 1)[0]);
    }

    return resultado;
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
    if (!contenedorCatalogo) return;

    const estadoSeleccionado = document.querySelector(".filtro-estado:checked")?.value || "todos";
    const duracionSeleccionada = document.querySelector(".filtro-duracion:checked")?.value || "todas";
    const generoSeleccionado = document.querySelector(".filtro-genero:checked")?.value || "todos";
    const ordenSeleccionado = document.querySelector("#ordenar")?.value || "";
    const soloEsteAño = document.querySelector("#filtro-año-actual");
    const textoBuscado = inputBuscador?.value.toLowerCase().trim() || "";

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

    if (soloEsteAño?.checked) {
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
            juegosFiltrados.sort((a, b) => (obtenerVotos[b.id] || 0) - (obtenerVotos[a.id] || 0));
            break;
        case "menos-votado":
            juegosFiltrados.sort((a, b) => (obtenerVotos[a.id] || 0) - (obtenerVotos[b.id] || 0));
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
        if (buscadorCantidad) buscadorCantidad.textContent = `${juegosFiltrados.length} Resultados`;
    } else {
        if (buscadorCantidad) buscadorCantidad.textContent = "";
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
const selectOrdenar = document.querySelector("#ordenar");
if (selectOrdenar) {
    selectOrdenar.addEventListener("change", () => {
        if (selectOrdenar.value === "default") {
            selectOrdenar.value = "";
        }
        aplicarFiltros();
    });
}

const btnLimpiarFiltros = document.querySelector("#btn-limpiar-filtros");
if (btnLimpiarFiltros) {
  btnLimpiarFiltros.addEventListener("click", limpiarFiltros);
}

const inputBuscador = document.querySelector("#buscador");
if (inputBuscador) {
  inputBuscador.addEventListener("input", aplicarFiltros);
}

["estadoAnimo", "duracion", "genero", "filtro-año-actual"].forEach(nombre => {
    document.querySelectorAll(`input[name='${nombre}']`)
        .forEach(radio => radio.addEventListener("change", aplicarFiltros));
});


// Mostrar/ocultar filtros en pantallas chicas
const paginaCatalogo = document.querySelector("#pagina-catalogo");
const btnToggleFiltros = document.querySelector("#btn-toggle-filtros");
const sidebarFiltros = document.querySelector("#sidebar");

if (btnToggleFiltros && paginaCatalogo && sidebarFiltros) {
  btnToggleFiltros.addEventListener("click", () => {
    const filtrosAbiertos = paginaCatalogo.classList.toggle("filtros-abiertos");
    btnToggleFiltros.setAttribute("aria-expanded", filtrosAbiertos ? "true" : "false");
  });
}

// Ocultar placeholder del select de orden en la lista desplegable
if (selectOrdenar) {
  selectOrdenar.addEventListener('mousedown', () => {
    const placeholder = selectOrdenar.querySelector('option[value=""]');
    if (placeholder) placeholder.remove();
  });
  selectOrdenar.addEventListener('blur', () => {
    if (selectOrdenar.value === '') {
      const placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.text = 'Ordenar por';
      placeholder.disabled = true;
      placeholder.selected = true;
      selectOrdenar.insertBefore(placeholder, selectOrdenar.firstChild);
    }
  });
}


// Iniciadores
if (contenedorCatalogo) {
    mostrarCatalogo(juegos);
}