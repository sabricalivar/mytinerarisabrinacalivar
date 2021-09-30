const express = require('express')
const cors =require('cors')
const passport = require('passport')
require('dotenv').config()
require('./config/database')
require('./config/passport')
const router = require('./routes/index')


const app = express()

//Middleware (preparativos van antes de las rutas)
app.use(cors()) /**app usa cors. aplica un filtro antes de que llegue a las rutas dota a mi servidor de esto // cuando estan en distintas direcciones*/
app.use(express.json()) /**todo lo que llegue con body interpretalo como objeto json */

app.use('/api', router)

app.listen(4000, ()=> console.log('Server listening on port 4000'))

