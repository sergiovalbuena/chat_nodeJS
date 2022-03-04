//1. importar express
const express = require ('express')
//2. crear router
const router = express.Router();
//3. boyParser  npm i body-parser
const bodyParser = require('body-parser');
//4.
const response = require('./network/response');

var app = express();
//bodyParser
app.use(bodyParser.json());
//anadir router a express
app.use(router);


//anadir peticion
router.get('/', function(req, res){
    res.send('Hola desde el GET con router')
});
router.post('/', function(req, res){
    res.send('Hola desde el POST 👽')
});

//con una nueva ruta /message
router.get('/message', function(req, res){
    console.log(req.headers); //recibiendo en el servidor  los HEADERS 
    res.header({
        "custom-header": "nuestro valor personalizado en el Header"
    });
    //res.send('enviando mensajes GET con router')
    response.success(req, res, "Lista de mensajes");
});
router.post('/message', function(req, res){
    //res.send('enviando mensajes desde el POST 👽')
    //res.status(201).send(); //devolver un nuevo STATUS
    //res.status(201).send({error: '', body: 'creado correctamente'}); //devolviendo un JSON
    
    if(req.query.error == 'ok'){
        response.error(req, res, 'error simulado correctamente', 400)
    }else{
        response.success(req, res, 'Creado correctamente', 201);
    }
    
});
router.delete('/message', function(req, res){
    console.log(req.query); // accediendo a parameteros por medio de query 
    console.log(req.body);  //trabjando con el body
    //res.send();//respuesta vacia 
    res.send('enviando mensajes' + req.body.text +'desde el POST 👽') //mandnado el query al cliente
    
});


// //Pedirle al servidor que nos devuelva algo: (sin rputer express)
// app.use('/', function(req, res){ //la funciton tienen dos parametros xq funcion http
//     res.send('Hola');
// });


//ejecutar: 
app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');

