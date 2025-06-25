// variables globales

// selectores

// funciones

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

const actualizarSlide = () => {
    const juego = obtenerJuegoAleatorio();
    console.log(juego)
    mostrarSlide(juego);
}

const iniciarIntervalo = () => {
    intervaloSlide = setInterval(actualizarSlide, 5000);
}

const siguienteSlide = () => {
    clearInterval(intervaloSlide);
    actualizarSlide();
    iniciarIntervalo();
}

const btnSiguienteSlide = document.querySelector("#btn-siguiente-slide");
btnSiguienteSlide.addEventListener("click", siguienteSlide)
//////////////////////////////////////////////////////////

////////// CARDS - JUEGOS /////////////

// crea una card tomando los datos de mi array de juegos.
const crearCard = (juego) => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    card.innerHTML = `
    <button class="btn-fav" data-id="${juego.id}">❤️</button>
    <img src="${juego.imagenes.imgCard}" alt="${juego.nombre}">
    <div class"card-content">
        <h3>${juego.nombre}</h3>
        <p>${juego.descripcion}</p>
        <button class="btn-upvote">⬆️</button>       
        <button class="btn-downvote">⬇️</button>       
    </div>
    `;

    return card;
}

// slider de cards, muestra 4 cards en pantalla, todos son juegos favoritos.
const mostrarFavoritos = ()=>{
    const contenedor = document.querySelector("#juegos-favoritos");
    contenedor.innerHTML = "";

    const juegosFavoritos = [];

};

// muestra los 4 juegos con mas votos (upvotes)
const mostrarDestacados = () =>{
    const contenedor = document.querySelector("#juegos-destacados");
    contenedor.innerHTML = "";

    const juegosOrdenados = juegos.sort((a,b)=>b.likes - a.likes);
    const top4 = juegosOrdenados.slice(0,4);

    top4.forEach(juego=>{
        contenedor.appendChild(crearCard(juego));
    })
}

// 
const btnUpvote = ()=>{
    document.querySelectorAll("#btn-upvote").forEach(btn =>{
        btn.addEventListener("click", ()=>{
            const id = parseInt(btn.dataset.id);

        })
    })
}


//////// FAVORITOS

let juegosFavoritos = [];


// iniciadores

actualizarSlide();
iniciarIntervalo();
mostrarDestacados();


