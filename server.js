// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()



app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', function(req, res){
    res.send('Welcome to an Awesome App about Breads!')
})

app.listen(PORT, function(){
    console.log('nomming at port', PORT);
})

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
// MIDDLEWARE
app.use(methodOverride('_method'))

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

app.use(express.static('public'))

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

app.get("*", function(req,res){
    res.send("error404")
})






