const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

//con una nueva ruta /message
router.get('/', function (req, res) {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});
router.post('/', function(req, res){

    controller.addMessage(req.body.chat, req.body.user, req.body.message)
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

router.patch('/:id', function (req, res) {
    console.log(req.params.id);
    
    controller.updateMessage(req.params.id, req.body.text)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => { 
            response.error(req, res, 'Error interno', 500, e)
        })
    res.send('Ok')
})

router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
        .then(() => {
        response.success(req, res, `usuario ${req.params.id} eliminado`, 200)
        })
        .catch(e => { 
            response.error(req, res, `Error interno`, 500, e);
        })
    
});


module.exports = router;
