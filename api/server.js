const express = require('express')
const api = express()
 
api.get('/', function (req, res) {
  res.send('Hello World')
})
 
api.listen(3000)