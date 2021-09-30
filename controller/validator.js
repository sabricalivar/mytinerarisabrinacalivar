const joi = require('joi')

const validator = (req,res, next)=>{
    const schema = joi.object({
        firstname: joi.string().min(2).max(15).messages({
            'string.min': 'Short name for big people! But, we need at least 2 characters in your name',
            'string.max': 'Wow! Great last name! but we need this field to be up to 15 characters long. Designer stuff ... sorry',

        }),
        lastname: joi.string().min(2).max(15).messages({
            'string.min': 'For your security we need at lest 2 characters long in your lastname',
            'string.max': 'Wow! Great last name! but we need this field to be up to 15 characters long. Designer stuff ... sorry',        
        }),
        email: joi.string().min(3).required().email().messages({
            'string.email': 'Sorry, we need at lest 3 characters long',
            'string.empty': 'We need a valid email, please', 
        }),
        password: joi.string().min(2).required().pattern(new RegExp('[a-z]')).messages({
            'string.min': 'Sorry, we need at lest 2 characters long',
            'string.empty': 'Cant be empty, please', 
            'string.pattern.base': 'Alphanumeric characters only'
        }),
        img: joi.string(),
        country: joi.string(),
        pronoun: joi.string(),
        google: joi.boolean()
        
    })

    const validation = schema.validate(req.body, {abortEarly:false})
    if(!validation.error){
        console.log('estoy en el if')
        console.log(validation.error)
        next()
    }else{
        console.log('estoy en el else')
        res.json({success:false, errors: validation.error})
    }

}
    

module.exports = validator




