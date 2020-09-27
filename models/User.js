const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    ispatient : {
        type : Boolean,
        required: true
    }
});

module.exports = User = mongoose.model('user', UserSchema);