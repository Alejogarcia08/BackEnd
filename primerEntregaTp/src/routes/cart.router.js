const express = require('express')


const { Router } = express;
const carritosRouter = new Router();


// importamos la clase Container
const ContenedorArchivo = require('../contenedores/ContenedorArchivoCarrito')

// Se instancia la clase contenedor
const ProductService = new ContenedorArchivo("../db/dbCarritos.json")



// Endpoints
carritosRouter.post('/', async (req, res) => {
    // logica

    const cart = req.body;
    const newCarrito = ProductService.create(cart);
    res.json(newCarrito)
})

carritosRouter.delete('/:id', async (req, res) => {
    // logica

    const all = req.params.id;
    const deletAll = ProductService.deleteAll(parseInt(all));
    res.json(deletAll)
})

carritosRouter.get('/:id/products', async (req, res) => {
    // logica
    const productos = ProductService.getAll();
    res.json(productos)
    
})


carritosRouter.post('/:id/products', async (req, res) => {
    // logica
    const id = req.params.id;
    const obj = req.body;
    const updatedProducto = ProductService.updateById(parseInt(id), obj);
    res.json(updatedProducto)
    
})


carritosRouter.delete('/:id/products/:id_prod', async (req, res) => {
    // logica
    const id = req.params.id;
    const deletID = ProductService.deleteById(parseInt(id));
    res.json(deletID)

})

module.exports = carritosRouter