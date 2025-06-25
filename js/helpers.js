const setLocalStorage =(clave, valor)=>{
    if(typeof valor ==="object"){
        valor = JSON.stringify(valor)
    }
    localStorage.setItem(clave, valor)
}

const getLocalStorage = (clave) =>{
    let valor = localStorage.getItem(clave);
    try{
        return JSON.parse(valor)
    }catch(error){
        return valor
    }
}

// const click =(id, callback)=>{
//     document.querySelector(`#${id}`).addEventListener("click", callback)
// }































///// VOTOS /////

// Obtener votos del localStorage
const obtenerVotos = () => {
    return JSON.parse(localStorage.getItem("votos")) || {};
};

// Guardar votos en localStorage
const guardarVotos = (votos) => {
    localStorage.setItem("votos", JSON.stringify(votos));
};

// Incrementar votos para un juego
const votarJuego = (id) => {
    const votos = obtenerVotos();
    votos[id] = (votos[id] || 0) + 1;
    guardarVotos(votos);
};

