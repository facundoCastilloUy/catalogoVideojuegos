// Variables globales
let claveFavoritos = "juegosFavoritos";
let juegosFavoritos = getLocalStorage(claveFavoritos) || [];

// Selectores
const contenedorCatalogo = document.querySelector("#catalogo");

// Funciones
const mostrarCatalogo = (listado) => {
    contenedorCatalogo.innerHTML = "";

    listado.forEach((juego) => {
        const esfavorito = juegosFavoritos.includes(juego.id);
        const votos = obtenerVotos()[juego.id] || 0;

        const card = document.createElement("a");
        card.href = `detalle.html?id=${juego.id}`;
        card.classList.add("card");
        if (esfavorito) card.classList.add("favorito");

        card.innerHTML = `
        <button id="btn-favorito"><span class="material-symbols-outlined">favorite</span></button>
        <img src="${juego.imagenes.imgCard}" alt="${juego.nombre}">
        <h3>${juego.nombre}</h3>
        <p>${juego.descripcion}</p>
        <div class="votos">
        <button id="btn-downvote">⬇️</button>
        <p class="votos-contador">${juego.votos}</p>
        <button id="btn-upvote">⬆️</button>
        </div>
        `

        card.querySelector("#btn-favorito").addEventListener("click", (e) => {
            e.preventDefault;
            if (esfavorito) {
                juegosFavoritos = juegosFavoritos.filter((fav) => fav !== juego.id)
            } else {
                juegosFavoritos.push(juego.id);
            }

            setLocalStorage(claveFavoritos, juegosFavoritos);
            mostrarCatalogo(listado);
        })
        contenedorCatalogo.append(card)
    });
};


// Iniciadores
mostrarCatalogo(juegos);