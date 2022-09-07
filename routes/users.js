const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

/* GET users listing. */
/* -en routes/users poner la ruta que recibe apellido y nombre para generar un saludo, poner el callback en un archivo controller
1- Una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando un saludo
 */

router.get('/:first_name/:last_name', controllers.userGreet);

/*
Crear una ruta con el metodo HTTP POST que haga lo siguiente:
 - devolvera un objeto JSON con lo siguiente 
  {
    "nombre": "ACA VA EL NOMBRE",
    "status": "succes"
  }
  el nombre que reciba se debe enviar por req.body.nombre
 */

router.post('/name', controllers.giveName);

module.exports = router;
