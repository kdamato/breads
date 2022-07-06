const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/', function(req, res){
    res.render('Index',
    //res.send('Bread')
        {
            breads: Bread,
            title: 'Index Page'
        }
    )
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req,params.arrayIndex]) {
    res.render('Show', {
      bread: Bread[req.params.arrayIndex]
    })}
    else {
        res.send('404')
    }
  })
  


module.exports=breads