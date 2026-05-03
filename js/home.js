// Slider de portada

let ultimoIndice = -1;
let intervaloSlide;
let slideActual = 0;

// Obtiene un juego aleatorio diferente al anterior
const obtenerJuegoAleatorioSlider = () => {
    let indiceAleatorio;
    do {
        indiceAleatorio = Math.floor(Math.random() * juegos.length);
    } while (indiceAleatorio === ultimoIndice);
    ultimoIndice = indiceAleatorio;
    return juegos[indiceAleatorio];
}

// Actualiza el contenido del slide
const actualizarSlide = () => {
    const juego = obtenerJuegoAleatorioSlider();
    const slides = document.querySelectorAll(".slide-contenido");

    const slideVisible = slides[slideActual % 2];
    const slideOculta = slides[(slideActual + 1) % 2];

    slideVisible.innerHTML = `
    <a href="detalle.html?id=${juego.id}" class="slide-enlace">
    <img src="${juego.imagenes.imgSlide}" alt="${juego.nombre}">
    <div class="slide-info">
    <div class="contenedor">
         <h2>${juego.nombre}</h2>
         <p>${juego.descripcion}</p>
    </div>
    </div>
    </a>
    `;

    slideVisible.classList.add("visible");
    slideOculta.classList.remove("visible");

    slideActual++;
};

// Inicia el slider automático
const iniciarSlider = () => {
    actualizarSlide();
    intervaloSlide = setInterval(actualizarSlide, 5000);
}

iniciarSlider();

// Secciones de destacados
const contenedorMasVotados = document.querySelector("#cards-mas-votados");
const contenedorAleatorios = document.querySelector("#cards-aleatorios");

const juegosMasVotados = obtenerMasVotados();
const juegosAleatorios = obtenerJuegosAleatorios();

mostrarCatalogo(juegosMasVotados, contenedorMasVotados);
mostrarCatalogo(juegosAleatorios, contenedorAleatorios);