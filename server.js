const express = require('express')
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routes');


db('mongodb+srv://db_user_myChatApp:db1234@cluster0.wvppi.mongodb.net/?retryWrites=true&w=majority');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//app.use(router);
router(app); //pasar e; servidor de express a router

app.use('/app', express.static('public'));


app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');

