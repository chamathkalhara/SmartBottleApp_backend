/**
 * Created by Chamath on 2017-04-23.
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/smartBottle');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./routes/api'));

//Error handling midleware
app.use(function (err, req, res, next) {
    //console.log(err);
    res.send({Error : err.message});
});

//listen for requests
app.listen(4000,function () {
    console.log("app is listning for requests");
});