const express = require('express')
const api = express()
var cors = require('cors')

api.use(express.json({ limit: '50mb' }))
api.use(cors())

let categories = [["Carne", "Verduras"], ["Fruta", "Bebidas"]]

let products = {
  Carne: [["Lomo", "Pechuga"], ["Ternera"]], 
  Verduras: [["Pimientos", "Acelgas"]], 
  Fruta: [["Plátanos", "Manzanas"]],
  Bebidas: [["Agua", "Cerveza"]]
}

let lists = ["Compra Navidad"]
 
api.get('/', (req, res) => {
  res.send('Hello World')
})

api.get('/retrieveCategories', (req, res) => {
  res.json(categories)
})

api.get('/retrieveProducts',  (req, res) => {
  const categorie = req.query.categorie
  res.json(products[categorie])
})

api.post('/addNewList', (req, res) => {
  const new_list = req.body.listName

  if (lists.includes(new_list)){
    console.log("Ya está!")
    return res.json({errorMessage: "Ya tienes una lista con ese nombre"})
  }
  
  lists.push(new_list)

  res.json([])
})

api.listen(3000)