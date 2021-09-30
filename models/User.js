const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {type:String},
    lastname: {type:String},
    email: {type:String},
    password:{type:String},
    img:{type:String},
    country:{type:String},
    pronoun:{type:String},
    rol:{type:String},
    google: {type:Boolean, default:false}
})

const User = mongoose.model('user', userSchema)

module.exports = User
