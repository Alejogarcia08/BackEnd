const express = require("express")
const classContainer = require('../desafio2/segundoDesafio')

const app = express();

const PORT = 8090

const archivo = new classContainer('../desafio2/products.json')

//TRAE TODOS LOS PRODUCTOS AL ENDPOINT (products)
app.get('/products', async (req, res) => {
    const prods = await archivo.getAll()


    res.send({ Productos: prods })
})

//TRAE UN PRODUCTO RANDOM

app.get('/random', async (req, res) => {
    const prods = await archivo.getAll()
    const random = parseInt(Math.random() * prods.length)
    res.send({ Productos: prods[random] })
})

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})