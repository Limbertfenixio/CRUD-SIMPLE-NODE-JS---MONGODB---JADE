
const express = require('express');
const router = express.Router();

//Requerimos todos los controladores
const product_controller = require('../controllers/product.controller');

//Url de prueba
router.get('/', product_controller.index);

//Ruta de formulario para la creacion de productos
router.get('/create', product_controller.product_create)

//Ruta que se encarga de añadir nuevos productos a la bd
router.post('/store', product_controller.product_store);

//Ruta para poder leer productos
router.get('/:id', product_controller.product_details);

//Ruta de formulario para la edicion de productos
router.get('/:id/edit', product_controller.product_edit);

//Ruta para poder actualizar productos
router.post('/:id/update' , product_controller.product_update);

//Ruta para poder eliminar productos
router.get('/:id/delete', product_controller.product_delete);

//Exportamos las rutas
module.exports = router;