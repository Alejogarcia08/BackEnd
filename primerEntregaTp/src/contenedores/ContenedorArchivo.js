const { promises: fs } = require('fs')

class ContenedorArchivo {

    constructor(ruta) {
        this.ruta = ruta;
    }

    async listar(id) {
        const obj = this.ruta.find((producto) => producto.id === id);
        if (obj) {
            return obj;
        } else {
            return ERROR;
        }
    }

    async listarAll() {
        return this.ruta
    }

    async guardar(obj) {
    }

    async actualizar(elem, id) {

    }

    async borrar(id) {

    }

    async borrarAll() {

    }
}

module.exports = ContenedorArchivo