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