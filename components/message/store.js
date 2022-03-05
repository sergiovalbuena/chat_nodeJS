//toda la logica de almacenamiento
//1. crear un mock : flasear la BD o el servicio para verificar que funciona correctamente
//entere lo que esta pasando y la responsabilida una de la capa de almacenamiento 

const list = [];

//empujar los messanjes al array list 
function addMessage(message){
    list.push(message);
}

function getMessages(){
    return list;
}

module.exports= {
    add: addMessage,
    list: getMessages, 
    //get
    //update
    //delete
}