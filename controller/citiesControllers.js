const City = require('../models/City')

const citiesControllers = {
    /**Métodos POST */
    postNewCity: async (req, res) => {
        try{
            const cityToPost = await new City({
                caption: req.body.caption,
                cover: req.body.cover,
                textAlt: req.body.textAlt,
                quote: req.body.quote,
                country: req.body.country,
                description: req.body.description,
                pictures1: req.body.pictures1,
                pictures2: req.body.pictures2,
                pictures3: req.body.pictures3,
                maps: req.body.maps,
                connection: req.body.connection,
                voltage: req.body.voltage,
                plugs: req.body.plugs,
                currency: req.body.currency,
                cryptocurrencies: req.body.cryptocurrencies,
            })

            let newCity = await cityToPost.save()
            res.json({success:true, response: newCity})
           
        }catch(err){
            res.json({success:false, response: "Mongo ghosting us"})
        }  
    },

    /**Métodos GET COLECTION */
    getAllCities: async (req, res) => {
        try{
            let cities = await City.find()
            if(cities.length != 0){
                res.json({ success:true, response: cities })
                console.log(cities)
            }else{
                res.json({ success:false, response: "No documents found"})
            }
        }catch(err){
            res.json({success:false, response: "Mongo ghosting us"})
        }
    },

        
    getOneCity: async (req, res) => {
        try{
            let city = await City.findOne({ _id: req.params.id }) /*-->primera ocurrencia -orden de los documentos en el disco. Retorna un doc*/
            if(city){
                res.json({ success:true, response: city })
            }else{
                res.json({ success:false, response: "No matches found"})
            }
        }catch(err){
            res.json({success:false, response: "Mongo ghosting us"})
        }
    },

    /**Método DELETE*/
    deleteCity: async (req, res) => {
        try{
            let cityDeleted = await City.findOneAndDelete({ _id: req.params.id })
            res.json({ success: true, response: cityDeleted })
        }catch(err){
            res.json({success:false, response: "Mongo ghosting us"})
        }
     },

     /**Método PUT */
    changeCity: async (req, res) => {
        try{
            let cityChanged = await City.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, {new:true})
            res.json({ success: true, response: cityChanged })
        }catch{
            res.json({success:false, response: "Mongo ghosting us"})
        }
     },
}

module.exports = citiesControllers



// getAllCities: async (req, res) => {
    //     let cities = await City.find()
    //     .then((res)=>{
    //         if(cities.length !=0){
    //             res.json({ success:true, response: cities })
    //         }else{
    //             res.json({ success:false, response: "No documents found"})
    //         }
    //     })
    //     .catch((err)=>{
    //         res.json({success:false, response: "Mongo ghosting us"})
    //     })
    // },
