const { promises: fs } = require('fs')

class ContenedorArchivo {

    constructor(ruta) {
        this.ruta = ruta;
    }

    async listar(id) {
        try {
            const readProducts = await fs.promises.readFile(this.path, 'utf-8');
            const data = JSON.parse(readProducts);
            const obj = data.find(obj => obj.id === id);
            return obj ? obj : null;

        } catch (err) {
            console.log(err);
        }
    }

    async listarAll() {
        try {
            const readProducts = await fs.promises.readFile(this.ruta, 'utf-8');
            return JSON.parse(readProducts)
        }
        catch (err) {
            console.log(err);
        }
    }

    async guardar(obj) {
        try {
            const products = await fs.promises.readFile(this.ruta, 'utf-8');
            const data = JSON.parse(products);
            let newId
            data.length === 0 ? newId = 1 : newId = data[data.length - 1].id + 1;
            const newObj = { ...obj, id: newId };
            data.push(newObj);
            await this.writeFile(data)
            return newObj.id;
        } catch (err) {
            console.log(err);
        }
    }

    async actualizar(elem, id) {

    }

    async borrar(id) {
        try {
            const readProducts = await fs.promises.readFile(this.ruta, 'utf-8');
            const data = JSON.parse(readProducts);
            const obj = data.filter(obj => obj.id !== id);
            await this.writeFile(obj);
        } catch (err) {
            console.log(err);
        }

    }

    async borrarAll() {
        try {
            this.writeFile([]);
        } catch (err) {
            console.log(err);
        }
    }
}


module.exports = ContenedorArchivo