var mysql = require('mysql');

//connect to mysql don't use var tomake it global
//import the products.js

var products = require('./routes/products');

//add products to ExpressJS route

app.use('/products', products);

pool = mysql.createPool({

    host: 'localhost',

    user: 'root',

    password: '0108C@denc3',

    database: 'characters_db'

});