//1. importar express
const express = require('express')
//2. crear router
//const router = express.Router(); //paso al archivo network.js
//const router = require('./components/message/network');
const router = require('./network/routes');
//3. boyParser  npm i body-parser
const bodyParser = require('body-parser');
//4.
//const response = require('./network/response'); // pasa a network.js

var app = express();
//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
//anadir router a express
//app.use(router);
router(app);

app.use('/app', express.static('public'));



//ejecutar: 
app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');

