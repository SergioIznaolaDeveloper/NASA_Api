const mongoose = require('mongoose');

const itemSchema = {
    email: {
        type: String
    },
    password:{
        type: String
    },
    active: {
        type: Boolean
    },
}

const usersSchema = mongoose.Schema(itemSchema);
const Users = mongoose.model('users', usersSchema);
module.exports = Users;