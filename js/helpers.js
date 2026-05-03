// Funciones auxiliares para localStorage

const setLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, typeof valor === "object" ? JSON.stringify(valor) : valor);
}

const getLocalStorage = (clave) => {
    try {
        return JSON.parse(localStorage.getItem(clave));
    } catch {
        return localStorage.getItem(clave);
    }
}