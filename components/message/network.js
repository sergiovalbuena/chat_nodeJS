const express = require('express');
const response = require('../../network/response');
const router = express.Router();

//con una nueva ruta /message
router.get('/', function(req, res){
    console.log(req.headers); //recibiendo en el servidor  los HEADERS 
    res.header({
        "custom-header": "nuestro valor personalizado en el Header"
    });
    //res.send('enviando mensajes GET con router')
    response.success(req, res, "Lista de mensajes");
});
router.post('/', function(req, res){
    if(req.query.error == 'ok'){
        response.error(req, res, 'error inesperado correctamente', 500, 'es solo una simulacion de los errores')
    }else{
        response.success(req, res, 'Creado correctamente', 201);
    }
    
});
router.delete('/', function(req, res){
    console.log(req.query); // accediendo a parameteros por medio de query 
    console.log(req.body);  //trabjando con el body
    res.send('enviando mensajes' + req.body.text +'desde el POST 👽') //mandnado el query al cliente
    
});


module.exports = router;
