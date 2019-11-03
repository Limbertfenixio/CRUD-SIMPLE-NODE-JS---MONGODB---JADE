
//Requerimeos mongoose 
const mongoodb = require('mongoose');
//Obtenemos una referencia de una esquema para el modelo
const Schema = mongoodb.Schema;

//definimos el esquema para nuestro modelo
let productSchema = new Schema({
    nombre : {type: String, required: true, max :100 },
    precio : {type : Number, require: true}
})

// Exportamos el modelo
module.exports = mongoodb.model('Product', productSchema);