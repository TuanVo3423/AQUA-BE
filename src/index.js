const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const app = express();
const Router = require('./routes');

const PORT = process.env.PORT || 5000;

const URL = process.env.DATABASE_URL;


// add some middleware of express
app.use(cors());
app.use(bodyParser.json({ limit : '30mb'}));
app.use(bodyParser.urlencoded({ extended : true , limit : '30mb' }));

Router(app);

mongoose.connect(URL, {useNewUrlParser : true , useUnifiedTopology : true} )
    .then(() => {
        app.listen(PORT, function(){
            console.log('Listening on port ' + PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    })