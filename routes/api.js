/**
 * Created by Chamath on 2017-04-23.
 */
const express = require('express');
const router = express.Router();
const User = require('../models/user');

//get a list of datas from db
router.get('/data',function (req , res, next) {
    res.send({type : 'GET'});
});

//add a new data to the db
router.post('/data',function (req , res, next) {
    //var user = new User(req.body);
    //user.save();
    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);
});

//update a data in db
router.put('/data/:id',function (req , res, next) {
    User.findByIdAndUpdate({_id : req.params.id}, req.body).then(function () {
        User.findOne({_id : req.params.id}).then(function (user) {
            res.send(user);
        });
    });
});

//delete a data from db
router.delete('/data/:id',function (req , res, next) {
    User.findByIdAndRemove({_id : req.params.id}).then(function (user) {
        res.send(user);
    });
});

module.exports = router;