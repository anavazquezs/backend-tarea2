const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

/* -en routes/maths poner todas las rutas relacionadas con suma, division y corroborar si el numero es par, poner el callback en un archivo controller
2- Crear una ruta dividir la cual reciba dos parametros (ruta parametrisada) divisor y dividendo, la misma tiene que devolver un res.json({error: "no se puede dividir por cero"}) si el usuario ingresa un 0, si no es el caso devolver res.json({resultado})
 */

router.get('/dividir/:dividendo/:divisor', controllers.dividir);

/*3- Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condicion de que no se puedan enviar numeros menores que cero el resultado se debe deolver por medio de un res.json({resultado}) */

router.get('/sumar/:valor1/:valor2', controllers.sumar);

/*4- Crear una ruta que reciba un numero (ruta con query) si el numero es impar debe devolver un res.send("no autorizado") , y si el numero es par debe devolver res.send("autorizado") */

router.get('/es_impar', controllers.esImpar);


module.exports = router;