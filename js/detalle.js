// obtener id desde la URL
const URLid = window.location.search;
const URLarray = URLid.split("=");
const id = parseInt(URLarray[1]);

// buscar el juego con ese id
const juego = juegos.find(j => j.id === id);

// mostrar titulo del juego
document.querySelector("#titulo").textContent = juego.nombre;

// galeria
const galeriaAmpliacion = document.querySelector("#galeria-ampliacion");
const galeriaMiniaturas = document.querySelector("#galeria-miniaturas");


galeriaMiniaturas.innerHTML = "";

const miniaturas = [
    juego.imagenes.imgGallery1,
    juego.imagenes.imgGallery2,
    juego.imagenes.imgGallery3,
    juego.imagenes.imgGallery4
];

const mostrarAmpliacion = (imagen) => {
    galeriaAmpliacion.innerHTML = `<img src="../${imagen}" alt="">`
}

const cargarMiniaturas = () => {
    miniaturas.forEach((imagen, indice) => {
        const imagenMiniatura = document.createElement("button");
        imagenMiniatura.classList.add("imagen-miniatura");
        imagenMiniatura.innerHTML = `<img src="../imgs/${imagen}">
    `;

        if (indice === 0) {
            imagenMiniatura.classList.add("miniatura-seleccionada");
            mostrarAmpliacion(imagen);
        }

        imagenMiniatura.addEventListener("click", () => {
            mostrarAmpliacion(imagen);

            const seleccionados = document.querySelectorAll(".miniatura-seleccionada");
            seleccionados.forEach((img) => img.classList.remove("miniatura-seleccionada"));

            imagenMiniatura.classList.add("miniatura-seleccionada");
        })
        galeriaMiniaturas.append(imagenMiniatura)
    })
}

// iniciadores
cargarMiniaturas();


// informacion del juego
const contenedorInformacion = document.querySelector("#informacion-juego");

contenedorInformacion.innerHTML = `
  <img src="${juego.imagenes.imgSlide}" alt="${juego.nombre}">
  <p>${juego.descripcion}</p>
  <ul>
    <li><strong>Lanzamiento:</strong> ${juego.lanzamiento}</li>
    <li><strong>Estudio:</strong> <a href="${juego.estudio.enlace}" target="_blank">${juego.estudio.nombre}</a></li>
    <li><strong>Plataformas:</strong> ${juego.plataformas.join(", ")}</li>
    <li><strong>Duración:</strong> ${juego.duracion}</li>
    <li><strong>Disponible en:</strong>
      ${juego.disponibleEn.Steam ? `<a href="${juego.disponibleEn.Steam}" target="_blank"><img src="../icons/Steam.png" class="icono-tienda" alt="Steam"></a>` : ""}
      ${juego.disponibleEn.EpicGames ? `<a href="${juego.disponibleEn.EpicGames}" target="_blank"><img src="../icons/EpicGames.png" class="icono-tienda" alt="Epic Games"></a>` : ""}
    </li>
  </ul>
`;

// 5 mas votados
const top5 = obtenerMasVotados();
mostrarCatalogo(top5, document.querySelector("#cards-mas-votados"));

// aleatorios
const aleatorios = obtenerJuegosAleatorios();
mostrarCatalogo(aleatorios, document.querySelector("#cards-aleatorios"));

