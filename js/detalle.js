// Obtiene el ID del juego desde la URL
const id = parseInt(new URLSearchParams(window.location.search).get("id"));
const juego = juegos.find(j => j.id === id);

document.querySelector("#titulo").textContent = juego.nombre;

// Galería de imágenes
const galeriaAmpliacion = document.querySelector("#galeria-ampliacion");
const galeriaMiniaturas = document.querySelector("#galeria-miniaturas");

const miniaturas = [
    juego.imagenes.imgGallery1,
    juego.imagenes.imgGallery2,
    juego.imagenes.imgGallery3,
    juego.imagenes.imgGallery4
];

const mostrarAmpliacion = (imagen) => {
    galeriaAmpliacion.innerHTML = `<img src="${imagen}" alt="">`;
}

const cargarMiniaturas = () => {
    miniaturas.forEach((imagen, indice) => {
        const imagenMiniatura = document.createElement("button");
        imagenMiniatura.classList.add("imagen-miniatura");
        imagenMiniatura.innerHTML = `<img src="imgs/${imagen}">`;

        if (indice === 0) {
            imagenMiniatura.classList.add("miniatura-seleccionada");
            mostrarAmpliacion(imagen);
        }

        imagenMiniatura.addEventListener("click", () => {
            mostrarAmpliacion(imagen);
            document.querySelectorAll(".miniatura-seleccionada").forEach(img => img.classList.remove("miniatura-seleccionada"));
            imagenMiniatura.classList.add("miniatura-seleccionada");
        });
        galeriaMiniaturas.append(imagenMiniatura);
    });
}

cargarMiniaturas();

// Información del juego
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
      ${juego.disponibleEn.Steam ? `<a href="${juego.disponibleEn.Steam}" target="_blank"><img src="icons/Steam.png" class="icono-tienda" alt="Steam"></a>` : ""}
      ${juego.disponibleEn.EpicGames ? `<a href="${juego.disponibleEn.EpicGames}" target="_blank"><img src="icons/EpicGames.png" class="icono-tienda" alt="Epic Games"></a>` : ""}
    </li>
  </ul>
`;

// Secciones de juegos relacionados
mostrarCatalogo(obtenerMasVotados(), document.querySelector("#cards-mas-votados"));
mostrarCatalogo(obtenerJuegosAleatorios(), document.querySelector("#cards-aleatorios"));