const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')

module.exports = passport.use(new jwtStrategy({
    /*donde los vas a encontrar ----  bajo que criterio va a interpretarlo. la llave para abrirlo*/
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETORKEY
}, (payload, done)=>{
    /**luego que tiene el dni pregunta al modelo si es de ahí */
    User.findOne({_id: payload._doc._id})
    .then(response =>{
        if(!response){
            return done(null, false) //no hubo error y no hubo usuario
        }else{
            return done(null,response) //no hubo error y hubo usuario
        }
    })
    .catch(error => done(error, false))// hubo error de comunicación
}))