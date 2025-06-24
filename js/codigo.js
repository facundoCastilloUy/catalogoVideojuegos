let ultimoIndice = -1;

const obtenerJuegoAleatorio = (juego) => {
    let nuevoIndice;

    do {
        nuevoIndice = Math.floor(Math.random() * juegos.length);
    } while (nuevoIndice === ultimoIndice);

    ultimoIndice = nuevoIndice;
    return juegos[nuevoIndice];
}

obtenerJuegoAleatorio();

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

const actualizarSlide = ()=>{
    const juego = obtenerJuegoAleatorio();
    console.log(juego)
    mostrarSlide(juego);
}

 const iniciarIntervalo = ()=>{
     intervaloSlide = setInterval(actualizarSlide,5000);
 }

// iniciarIntervalo();

const siguienteSlide = () => {
     clearInterval(intervaloSlide);
     actualizarSlide();
     iniciarIntervalo();
 }

const btnSiguienteSlide = document.querySelector("#btn-siguiente-slide");
btnSiguienteSlide.addEventListener("click", siguienteSlide)




