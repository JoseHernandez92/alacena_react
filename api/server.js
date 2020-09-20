const express = require('express')
const api = express()
var cors = require('cors')

api.use(express.json({ limit: '50mb' }))
api.use(cors())

let categories = ["Carne", "Verduras", "Fruta", "Bebidas"]

let products = {
  Carne: ["Lomo", "Pechuga", "Ternera"], 
  Verduras: ["Pimientos", "Acelgas"], 
  Fruta: ["Plátanos", "Manzanas"],
  Bebidas: ["Agua", "Cerveza"]
}

let lists = {}
 
api.get('/', (req, res) => {
  res.send('Hello World')
})

api.get('/retrieveCategories', (req, res) => {
  res.json(categories)
})

api.get('/retrieveProducts',  (req, res) => {
  const category = req.query.category
  
  res.json(products[category])
})

api.get('/retrieveListProducts',  (req, res) => {
  const list = req.query.list

  res.json(lists[list])
})

api.post('/addNewList', (req, res) => {
  const new_list = req.body.listName

  if(new_list in lists){
    return res.json({errorMessage: "Ya tienes una lista con ese nombre"})
  }
  lists[new_list] = []
  
  res.json([])
})

api.post('/addNewProduct', (req, res) => {
  const list_name = req.body.list
  const product = req.body.product

  lists[list_name].push(product)

  res.json([])
})

api.get('/retrieveLists', (req, res) => {
  const allList = Object.keys(lists)

  res.json(allList)
})

api.listen(3000)