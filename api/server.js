const express = require('express')
const api = express()
var cors = require('cors')

api.use(cors())
 
api.get('/', function (req, res) {
  res.send('Hello World')
})
 
api.listen(3000)