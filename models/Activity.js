const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    schedule: {type:String},
    picture1: {type:String},
    alt1: {type:String},
    review1: {type:String},
    duration1:{type:String},
    info1:{type:String},
    picture2: {type:String},
    alt2: {type:String},
    review2: {type:String},
    duration2:{type:String},
    info2:{type:String},
    picture3: {type:String},
    alt3: {type:String},
    review3: {type:String},
    duration3:{type:String},
    info3:{type:String},
    picture4: {type:String},
    alt4: {type:String},
    review4: {type:String},
    duration4:{type:String},
    info4:{type:String},
    itineraryId:{type: mongoose.Types.ObjectId, ref: "itinerary"},
    itemExtra2:{type:Array},
})

const Activity = mongoose.model('activity', activitySchema)

module.exports = Activity