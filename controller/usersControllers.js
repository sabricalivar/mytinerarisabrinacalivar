const User = require('../models/User')
const bcryptjs= require('bcryptjs')
const jwt = require('jsonwebtoken')

const usersControllers ={
    /**Métodos POST SIGNUP*/
    postSignup: async (req, res)=>{    
        const { firstname, lastname, email, password, img, country, pronoun, rol, google } = req.body
        let hashedPass = bcryptjs.hashSync(password, 10)

        const userToPost = new User({
            firstname,
            lastname,
            email,
            password: hashedPass,
            img,
            country,
            pronoun,
            rol,
            google,
        })

        try{
            let userExist = await User.findOne({ email: email })
                console.log(email)
                console.log(userExist)
                if(userExist){
                    res.json({success:false, response:'Username already in use'})
                } 
                // throw new Error('Username already in use')
                let newUser = await userToPost.save()
                const token =jwt.sign({...newUser}, process.env.SECRETORKEY)
                res.json({
                    success:true, 
                    response:{firstname: newUser.firstname, img: newUser.img, id: newUser._id, token}
                })
        }catch(err){
            res.json({success:false, response: err.message})
        }
    },

    /**Método POST LOGIN */
    postLogin: async (req, res) =>{
        const {email, password, flagGoogle} =req.body
        try{
            let userExist = await User.findOne({email:email})
            if(!userExist){
                throw new Error('Invalid credencials')

            }else if(userExist.google && !flagGoogle){
                throw new Error('You created one account with Google, please log in with them')
            }

            let passwordOk = bcryptjs.compareSync(password, userExist.password)
            if(!passwordOk){
                throw new Error('Invalid credencials')
            }

            const token = jwt.sign({...userExist}, process.env.SECRETORKEY)

            res.json({
                success:true, 
                response:{token, firstname: userExist.firstname, img: userExist.img}
            })
            
        }catch(err){
            res.json({success:false, response: err.message})
        }
    },

    /**VERIFY TOKEN */
    verifyToken:(req, res)=>{
        console.log("llego al verify")
        console.log(req.user.firstname)
        console.log(req.user.img)
        res.json({firstname: req.user.firstname, img: req.user.img, id: req.user._id})
    },

    /**Método GET ONE user by ID */
    getUser: async (req, res)=>{
        try{
            let oneUser= await user.findOne({_id: req.params.id })
            if(oneUser){
                res.json({ success:true, response: oneuser })
            }else{
                res.json({ success:false, response: "No matches found"})
            }
        }catch(err){
            res.json({success:false, response: "Mongo ghosting us"})
        }
    },

    /**Métodos PUT user by ID */
    changeUser: async(req, res)=>{
        try{
            let userChanged = await user.findOneAndUpdate({_id: req.params.id }, {...req.body}, {new:true})
            res.json({success:true, response:userChanged})
        }catch{
            res.json({success:false, response:'Mongo ghosting us'})
        }
    },

    /**Método DELETE user by ID */
    deleteUser: async (req, res)=>{
        try{
            let userDeleted = await user.findOneAndDelete({_id:req.params.id})
            res.json({succes:true, response:userDeleted})
        }catch(err){
            res.json({success:false, response:'Mongo ghosting us'})
        }
    },


}

module.exports = usersControllers


