const Activity = require('../models/Activity')

const activitiesControllers ={
    /**Métodos POST */
    postNewActivity: async (req, res)=>{
        try{
            const activityToPost = await new Activity({
                schedule: req.body.shedule,
                picture1: req.body.picture1,
                alt1: req.body.alt1,
                review1: req.body.review1,
                duration1: req.body.duration1,
                info1: req.body.info1,
                picture2: req.body.picture2,
                alt2: req.body.alt2,
                review2: req.body.review2,
                duration2: req.body.duration2,
                info2: req.body.info2,
                picture3: req.body.picture3,
                alt3: req.body.alt3,
                review3: req.body.review3,
                duration3: req.body.duration3,
                info3: req.body.info3,
                picture4: req.body.picture4,
                alt4: req.body.alt4,
                review4: req.body.review4,
                duration4: req.body.duration4,
                info4: req.body.info4,
                itineraryId: req.body.itineraryId,
                itemExtra2: req.body.itemExtra2,
            })

            let newActivity = await activityToPost.save()
            console.log(res)
            res.json({success:true, response: newActivity})
        }catch(err){
            console.log(err.response)
            res.json({success:false, response: "Mongo ghosting us"})
        }
    },

        /**Método GET activities by itineraryId */
        getActivitiesByItineraryId: async (req, res)=>{
        try{
            console.log(req.params.itineraryId)
            let activitiesByItinerary= await Activity.find({itineraryId: req.params.itineraryId})
            res.json({success:true, response: activitiesByItinerary})
        }catch(err){
            res.json({success:false, response:'Mongo ghosting us'})
        }
        
    },

}

module.exports = activitiesControllers