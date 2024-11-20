const mongoose = require("mongoose");
const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "provide name"]
    },
    email: {
        type: String,
        required: [true, "provide email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "provide password"]
    },
    profile_pic: {
        type: String,
        default: ""
    }
}, {
    timestamps:  true
})

const userModel = mongoose.model('User', userScheme);

module.exports = userModel;

