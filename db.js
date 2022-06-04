//archivo para gestionar toda la conexion 

const db = require('mongoose');

db.Promise = global.Promise

//const uri =   'mongodb+srv://db_user_myChatApp:db1234@cluster0.wvppi.mongodb.net/?retryWrites=true&w=majority'
async function connect(url) {
    await db.connect(url , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
    .then(() => console.log('[db] Conectada con éxito ⭐️'))
    .catch(err => console.error('[db]', err));
    
}

module.exports = connect;
