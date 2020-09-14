const express = require('express')
const api = express()
var cors = require('cors')

api.use(cors())

let categories = [["Carne", "Verduras"], ["Fruta", "Bebidas"]]
 
api.get('/', function (req, res) {
  res.send('Hello World')
})

api.get('/retrieveCategories', function (req, res) {
  res.json(categories)
})


 
api.listen(3000)