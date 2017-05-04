/**
 * Created by Chamath on 2017-04-23.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema and models
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true,'Name is required']
    },
    dob: {
        type: String,
        required: [true,'Date of birth is required']
    },
    sex: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UsageSchema = new Schema({
    date: {
        type: String
    },
    hour: {
        type: Number
    },
    measure: Number,
    user: UserSchema
});

const User = mongoose.model('user',UserSchema);

module.exports = User;