const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// DEPENDENCIES
const methodOverride = require('method-override')

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', function(req, res){
    res.send('Welcome to an Awesome App about Breads!')
})

// app.get('*', function(req,res){
//     res.send('404')
// })

app.listen(PORT, function(){
    console.log('nomming at port', PORT);
})

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.use(express.static('public'))

// MIDDLEWARE
app.use(methodOverride('_method'))



