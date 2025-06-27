// variables globales

let ultimoIndice = -1;

let intervaloSlide;
let slideActual = 0;

// Funciones

// funcion para obtener un juego aleatorio
const obtenerJuegoAleatorio = () => {
    let indiceAleatorio;

    do {
        indiceAleatorio = Math.floor(Math.random() * juegos.length);
    } while (indiceAleatorio === ultimoIndice);

    ultimoIndice = indiceAleatorio;
    return juegos[indiceAleatorio];
}

// cambia de slide
const actualizarSlide = () => {
    const juego = obtenerJuegoAleatorio();
    const slide = document.querySelectorAll(".slide-contenido");

    const slideVisible = slide[slideActual % 2];
    const slideOculta = slide[(slideActual + 1) % 2];

    slideVisible.innerHTML = `
    <img src="${juego.imagenes.imgSlide}" alt="${juego.nombre}">
    <div class="slide-info">
    <div class="contenedor">
         <h2>${juego.nombre}</h2>
         <p>${juego.descripcion}</p>
    </div>
    </div>
    `;

    slideVisible.classList.add("visible");
    slideOculta.classList.remove("visible");

    slideActual++;
};

// iniciar el slider
const iniciarSlider = () => {
    actualizarSlide();
    intervaloSlide = setInterval(actualizarSlide, 5000);
}

iniciarSlider();