const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

/*  -en routes/list poner la ruta que crea el listado de las compras,  poner el callback en un archivo controller
5- Una ruta lista de compras (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto})
 */

router.get('/', controllers.listaCompras);

module.exports = router;