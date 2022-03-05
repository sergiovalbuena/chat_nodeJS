const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

//con una nueva ruta /message
router.get('/', function(req, res){
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});
router.post('/', function(req, res){

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201 );
        })
        .catch(e => {
            response.error(req, res, 'Infomracion Invalida inesperado correctamente', 400, 'error para ell logado')
        });
    // if(req.query.error == 'ok'){
    //     response.error(req, res, 'error inesperado correctamente', 500, 'es solo una simulacion de los errores')
    // }else{
    //     response.success(req, res, 'Creado correctamente', 201);
    // }
    
});
router.delete('/', function(req, res){
    console.log(req.query); // accediendo a parameteros por medio de query 
    console.log(req.body);  //trabjando con el body
    res.send('enviando mensajes' + req.body.text +'desde el POST 👽') //mandnado el query al cliente
    
});


module.exports = router;
