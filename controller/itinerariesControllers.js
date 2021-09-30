const Itinerary = require('../models/Itinerary')

const itinerariesControllers = {
    /**Métodos POST */
    postNewItinerary: async (req, res) => {
        try {
            const itineraryToPost = await new Itinerary({
                name: req.body.name,
                author: req.body.author,
                pictureAuthor: req.body.pictureAuthor,
                textAlt: req.body.textAlt,
                quote: req.body.quote,
                schedule: req.body.schedule,
                price: req.body.price,
                budget: req.body.budget,
                likes: req.body.likes,
                hashtags: req.body.hashtags,
                description: req.body.description,
                pictures: req.body.pictures,
                route: req.body.route,
                comments: [...req.body.newComment],
                cityId: req.body.cityId,
                itemExtra2: req.body.itemExtra3,
            })

            let newItinerary = await itineraryToPost.save()
            res.json({ success: true, response: newItinerary })
        } catch (err) {
            res.json({ success: false, response: "Mongo ghosting us" })
        }
    },

    /**Metodos GET COLECTION*/
    getAllItineraries: async (req, res) => {
        try {
            let itineraries = await Itinerary.find()
            res.json({ success: true, response: itineraries })
        } catch (err) {
            res.json({ success: false, response: 'Mongo ghosting us' })
        }
    },

    /**Método GET ITINERARIES by cityId */
    getItinerariesByCity: async (req, res) => {
        try {
            let itinerariesByCity = await Itinerary.find({ cityId: req.params.cityId })
            res.json({ success: true, response: itinerariesByCity })
        } catch (err) {
            res.json({ success: false, response: 'Mongo ghosting us' })
        }

    },

    /**Método GET ONE ITINERARY by ID */
    getItinerary: async (req, res) => {
        try {
            let oneItinerary = await Itinerary.findOne({ _id: req.params.id })
            if (oneItinerary) {
                res.json({ success: true, response: oneItinerary })
            } else {
                res.json({ success: false, response: "No matches found" })
            }
        } catch (err) {
            res.json({ success: false, response: "Mongo ghosting us" })
        }
    },

    /**Métodos PUT ITINERARY by ID */
    changeItinerary: async (req, res) => {
        try {
            let itineraryChanged = await Itinerary.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
            res.json({ success: true, response: itineraryChanged })
        } catch {
            res.json({ success: false, response: 'Mongo ghosting us' })
        }
    },

    putLikesItinerary: async (req, res) => {
        try {
            let itinerario = await Itinerary.findOne({ _id: req.params.id })
            if (itinerario.likes.includes(req.user._id)) {
                let itineraryDisliked = await Itinerary.findOneAndUpdate({ _id: req.params.id }, { $pull: { likes: req.user._id } }, { new: true })
                res.json({ success: true, response: itineraryDisliked.likes })

            } else {
                let itineraryLiked = await Itinerary.findOneAndUpdate({ _id: req.params.id }, { $push: { likes: req.user._id } }, { new: true })
                res.json({ success: true, response: itineraryLiked.likes })
            }
        } catch (error) {
            console.log(error.message)
        }
    },

    putCommentsByItineraryId: async (req, res) => {

        let comentario = { body: req.body.body, userId: req.user._id }

        try {
            let newComments = await Itinerary.findOneAndUpdate({ _id: req.params.id }, { $push: { comments: comentario } }, { new: true })
            res.json({ success: true, response: newComments.comments })
        }catch(error) {
            res.json({success:false, response: error})
        }
    },

    putDeleteCommentsByItineraryId: async (req, res) => {

        let commentId = { _id: req.body.commentId }
        console.log(commentId)

        try {
            let newComments = await Itinerary.findOneAndUpdate({ _id: req.params.id }, { $pull: { id: commentId } }, { new: true })
            res.json({ success: true, response: newComments.comments })
        }catch(error) {
            res.json({success:false, response: error})
        }
    },

    

    /**Método DELETE ITINERARY by ID */
    deleteItinerary: async (req, res) => {
        try {
            let itineraryDeleted = await Itinerary.findOneAndDelete({ _id: req.params.id })
            res.json({ succes: true, response: itineraryDeleted })
        } catch (err) {
            res.json({ success: false, response: 'Mongo ghosting us' })
        }
    },



}

module.exports = itinerariesControllers


