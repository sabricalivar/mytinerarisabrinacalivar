const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    caption: {type:String},
    cover: {type:String},
    textAlt:{type:String},
    quote:{type:String},
    country: {type:String},
    description: {type:String},
    pictures1: {type:String},
    pictures2: {type:String},
    pictures3: {type:String},
    maps: {type:String},
    connection:{type:String},
    voltage:{type:Number},
    plugs:{type:String},
    currency:{type:String},
    cryptocurrencies:{type:String},
})

const City = mongoose.model('city', citySchema)

module.exports = City