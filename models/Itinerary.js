const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name: {type:String},
    author: {type:String},
    pictureAuthor: {type:String},
    textAlt:{type:String},
    quote:{type:String},
    schedule:{type:Array},
    price:{type:Number},
    budget:{type:String},
    likes: {type:Array},
    hashtags:{type:Array},
    description: {type:String},
    pictures: {type:Array},
    route: {type:String},
    comments:[{
        body: {type:String},
        userId:{type:mongoose.Types.ObjectId, ref: 'user'},
    }],
    cityId:{type: mongoose.Types.ObjectId, ref: "city"},
    itemExtra2:{type:Array},
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary

