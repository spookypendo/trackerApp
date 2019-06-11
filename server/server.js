// Set up
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');

// Configuration
mongoose.connect('mongodb://localhost/tracker-data', {useNewUrlParser: true});

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// Models
var Schema = mongoose.Schema;

var patientDetails = mongoose.model('patientDetails', new Schema({
    _id: Object,
    patient_ID : String,
    dob : String,
    sex : String,
    division : String,
    ward : String,
    art_status : String
}),'patientDetails');

// Routes

    // Get patients

    app.get('/api/patients', function(req, res) {

        console.log("fetching patients");

        // use mongoose to get all patients in the database
        patientDetails.find(function(err, patients) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(patients); // return all patients in JSON format
        });
    });


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
