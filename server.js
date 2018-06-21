const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var passport = require('passport')
var session = require('express-session')
var env = require('dotenv').load();
var mysql = require('mysql')
const PORT = process.env.PORT || 3001;

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

//Models
//var models = require("./app/models");

// //Sync Database
// models.sequelize.sync().then(function () {

//     console.log('Nice! Database looks fine')

// }).catch(function (err) {

//     console.log(err, "Something went wrong with the Database Update!")

// });

// app.get('/', function (req, res) {

//     res.send('Welcome to Easy D&D');

// });


// // Define middleware here
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// Connect to the SQL DB
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '0108C@denc3',
    database: 'characters_db',
  });
  
  // Connect to database.
  connection.connect();

  app.get('/characters', (req, res) => {
    connection.connect();
    connection.query('SELECT * from characters', function(err, rows, fields) {
      if (!err) {
            res.send(JSON.stringify(rows));
      } else {
        console.log('Error while performing Query.');
      }
    });
    connection.end();
  });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});