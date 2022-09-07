const controllers = {
    userGreet(req, res) {
        res.send(`${req.params.first_name} ${req.params.last_name}, ${req.query.saludo}`);
    },
    dividir(req, res) {
        if(req.params.divisor === 0) {
            res.json({
                error: "No se puede dividir por cero",
            })
        } else {
            let num1 = Number(req.params.dividendo);
            let num2 = Number(req.params.divisor);
            let resultado = num1/num2;
            res.json({
                resultado: resultado,
            });
        };
    },
    sumar(req, res) {
        if(req.params.valor1 < 0 || req.params.valor2 < 0) {
            res.json({
                error: 'No incluir valores menores a cero',
            })
        } else {
            let num1 = Number(req.params.valor1);
            let num2 = Number(req.params.valor2);
            let resultado = num1 + num2;
            res.json({
                resultado: resultado,
            });
        };
    },
    esImpar(req, res) {
        if(req.query.numero % 2 === 0) {
            res.send('Autorizado')
        } else {
            res.send('No autorizado')
        };
    },
    listaCompras(req, res) {
        res.json(req.query);
    },
    giveName(req, res) {
        res.json({
            name: req.body.name,
            status: "success"
        });
    },
}

module.exports = controllers;