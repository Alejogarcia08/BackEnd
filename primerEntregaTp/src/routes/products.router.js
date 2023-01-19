const express = require('express')


const { Router } = express;
const productosRouter = new Router();


// importamos la clase Container
const ContenedorArchivo = require('../contenedores/ContenedorArchivo')

// Se instancia la clase contenedor
const ProductService = new ContenedorArchivo("../db/dbProductos.json")


// funcion Error
function crearErrorNoEsAdmin(ruta, metodo) {
    const error = {
        error: -1,
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

// Middleware para Administrador
const esAdmin = true

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json(crearErrorNoEsAdmin(req.url, req.method))
    } else {
        next()
    }
}


// Endpoints
productosRouter.get('/', async (req, res) => {
    // logica
    const productos = ProductService.getAll();
    res.json(productos)
})
//    -->   /api/productos/5
productosRouter.get('/:id', async (req, res) => {
    // logica
    const id = req.params.id;
    const producto = ProductService.getById(parseInt(id));
    res.json(producto)
})

// tiene permisos un admin
productosRouter.post('/', soloAdmins, async (req, res) => {
    // logica
    const obj = req.body;
    const newObj = ProductService.create(obj);
    res.json(newObj)
})

productosRouter.put('/:id', soloAdmins, async (req, res) => {
    // logica
    const id = req.params.id;
    const obj = req.body;
    const updatedProducto = ProductService.updateById(parseInt(id), obj);
    res.json(updatedProducto)
})

productosRouter.delete('/:id', soloAdmins, async (req, res) => {
    // logica
    const id = req.params.id;
    const deletID = ProductService.deleteById(parseInt(id));
    res.json(deletID)
})


module.exports = productosRouter