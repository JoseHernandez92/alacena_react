const express = require('express')
const api = express()
var cors = require('cors')

api.use(cors())

let categories = [["Carne", "Verduras"], ["Fruta", "Bebidas"]]

let products = {
  Carne: [["Lomo", "Pechuga"], ["Ternera"]], 
  Verduras: [["Pimientos", "Acelgas"]], 
  Fruta: [["Plátanos", "Manzanas"]],
  Bebidas: [["Agua", "Cerveza"]]
}
 
api.get('/', function (req, res) {
  res.send('Hello World')
})

api.get('/retrieveCategories', function (req, res) {
  res.json(categories)
})

api.get('/retrieveProducts', function (req, res) {
  const categorie = req.query.categorie
  res.json(products[categorie])
})

api.listen(3000)