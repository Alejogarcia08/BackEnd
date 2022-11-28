const { privateDecrypt } = require("crypto")
const Conteiner = require("./clase.js")
const products = new Conteiner("./products.json")

async function start() {

    const product1 = {
        name: "zapatillas",
        price: 350,
        thumnail: "url"
    }

    const product2 = {
        name: "pantalon",
        price: 450,
        thumnail: "url"
    }

    const product3 = {
        name: "buzo",
        price: 300,
        thumnail: "url"
    }

    const product4 = {
        name: "remera",
        price: 250,
        thumnail: "url"
    }
    
    await products.deleteAll()
    //await products.getAll().then(a => console.log(a));
    await products.save(product3)
    await products.save(product2)
    await products.save(product1)
    
}
start();