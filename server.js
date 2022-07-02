const express = require('express')

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

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)