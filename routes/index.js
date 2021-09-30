const express = require('express')
const router = express.Router()
const passport = require('passport')
const validator = require('../controller/validator')
const citiesControllers = require('../controller/citiesControllers')
const itinerariesControllers = require('../controller/itinerariesControllers')
const activitiesControllers = require('../controller/activitiesControllers')
const usersControllers = require('../controller/usersControllers')

router
    .route('/cities')
    .get(citiesControllers.getAllCities)
    .post(citiesControllers.postNewCity)

router
    .route('/city/:id')
    .get(citiesControllers.getOneCity)
    .delete(citiesControllers.deleteCity)
    .put(citiesControllers.changeCity)

router
    .route('/itineraries')
    .get(itinerariesControllers.getAllItineraries)
    .post(itinerariesControllers.postNewItinerary)

router
    .route('/itineraries/:cityId')
    .get(itinerariesControllers.getItinerariesByCity)

router
    .route('/itinerary/:id')
    .get(itinerariesControllers.getItinerary)
    .put(itinerariesControllers.changeItinerary)
    .delete(itinerariesControllers.deleteItinerary)

router
    .route('/itineraries/likes/:id')
    .put(
        passport.authenticate('jwt', { session: false }),
        itinerariesControllers.putLikesItinerary
    )

router
    .route('/itineraries/comments/:id')
    .put(
        passport.authenticate('jwt', { session: false }),
        itinerariesControllers.putCommentsByItineraryId
    )

router
    .route('/itineraries/deleteComments/:id')
    .put(
        passport.authenticate('jwt', { session: false }),
        itinerariesControllers.putDeleteCommentsByItineraryId
    )

router
    .route('/user/signup')
    .post(validator, usersControllers.postSignup)

router
    .route('/user/login')
    .post(usersControllers.postLogin)

router
    .route('/user/:id')
    .get(usersControllers.getUser)
    .put(usersControllers.changeUser)
    .delete(usersControllers.deleteUser)

router
    .route('/verifyToken')
    .get(
        passport.authenticate('jwt', { session: false }),
        usersControllers.verifyToken
    )

router
    .route('/activities')
    .post(activitiesControllers.postNewActivity)


router
    .route('/activity/:itineraryId')
    .get(activitiesControllers.getActivitiesByItineraryId)

module.exports = router

