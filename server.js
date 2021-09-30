const express = require('express')
const cors =require('cors')
const passport = require('passport')
require('dotenv').config()
require('./config/database')
require('./config/passport')
const router = require('./routes/index')
const path = require('path')


const app = express()

//Middleware (preparativos van antes de las rutas)
app.use(cors()) /**app usa cors. aplica un filtro antes de que llegue a las rutas dota a mi servidor de esto // cuando estan en distintas direcciones*/
app.use(express.json()) /**todo lo que llegue con body interpretalo como objeto json */

app.use('/api', router)

/*verificar si está en producción*/

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}

app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', () => console.log('Server listening...'))

