// Obtengo un juego aleatorio, evitando que se repita enseguida.

let juegoActual;
let ultimoIndice = -1;

const obtenerJuegoAleatorio = ()=>{
    let nuevoIndice;

    do{
        nuevoIndice = Math.floor(Math.random() * juegos.length);
    } while (nuevoIndice === ultimoIndice);

    ultimoIndice = nuevoIndice;
    return juegos[nuevoIndice];
}

obtenerJuegoAleatorio();
///////////////////////

// Slider aleatorio

let intervaloSlider;

const mostrarSlide = ()=>{
    juegoActual = obtenerJuegoAleatorio();

    const slide = document.querySelector("#slide");
    slide.innerHTML = `
    <img src="${juegoActual.imagenes.imgSlide}" alt="${juegoActual.nombre}>
    <div>
    <h2>${juegoActual.nombre}</h2>
    <p>${juegoActual.descripcion}<p>
    </div>
    `;
}

const siguienteSlide = ()=>{
    mostrarSlide();
    
}

const btnSiguienteSlide = document.querySelector("#btn-siguiente-slide");
btnSiguienteSlide.addEventListener("click", siguienteSlide)




