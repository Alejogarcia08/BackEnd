const fs = require("fs").promises;
const { json } = require("stream/consumers");

class Conteiner {
    constructor(path) {
        this.path = path
    }

    async save(product) {
        try {
            const read = await fs.readFile(this.path, 'utf-8');
            const data = JSON.parse(read)
            
            //OPERADOR TERNARIO 
            
            let newId
            data.length === 0 
            ? (newId = 1 )
            : (newId = data[data.length - 1].id + 1);
            const newProd = {...product, id: newId};
            data.push(newProd);
            await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8")
            return newProd.id;

        }
        catch (err) {
            console.log(err);
        }
    }

    async getALL() {
        try {
            const read = await fs.readFile(this.path, 'utf-8');
            return JSON.parse(read)
        }
        catch (err) {
            console.log(err);
        }
    }

    async deleteAll() {
        try {
            await fs.writeFile(this.path, JSON.stringify([], null, 2), "utf-8")
        }
        catch (err) {
            console.log(err);
        }
    }
}

module.exports = Conteiner
