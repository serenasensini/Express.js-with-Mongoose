let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let routes = require("./routes/routes");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// #STEP 1. Stringa di connessione al database
mongoose.connect('mongodb://localhost/database', { useNewUrlParser: true});

var db = mongoose.connection;

if(!db)
    console.log("Error connecting to the database")
else
    console.log("Connected to the database successfully")

var port = process.env.PORT || 8080;

// Opzionale: response di default
app.get('/', (req, res) => res.send('Hello World with Express.js!'));

// #STEP 2. File per la gestione delle rotte
app.use('/api', routes);
app.listen(port, function () {
    console.log("Running webapp on port " + port);
});