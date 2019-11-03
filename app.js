
const express = require('express');
const bodyParser = require('body-parser');
//const MongoClient = require('mongodb').MongoClient;
const mongosee = require('mongoose');

let dev_db_url = 'mongodb+srv://crud:crudsimple@crudsimplenode-jazyo.mongodb.net/test?retryWrites=true&w=majority'
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongosee.connect(mongoDB, {useUnifiedTopology: true, useNewUrlParser: true});
mongosee.Promise = global.Promise;
const db = mongosee.connection;
db.on('error', console.error.bind(console,'MongoDB connexion error'))
//const client = new MongoClient(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
/*client.connect(err => {
    const collection = client.db('crudsimplenode').collection('products');
    client.close();
})*/
//client.on('error', console.error.bind(console, 'MongoDb connect error : '));


const app = express();

//importamos las rutas
const product = require('./routes/product.route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//Usamos la ruta /produtct/ruta importada
app.use('/products', product)
app.set('port' , process.env.PORT || 3000)

app.listen(app.get('port') , () => {
    console.log('El servidor se ha iniciado en el puerto 3000');
})