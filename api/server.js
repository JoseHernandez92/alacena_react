const express = require('express')
const api = express()
var cors = require('cors')

api.use(cors())
api.use(express.json())

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
  const categories = Object.keys(products)

  res.json(categories)
})

api.get('/retrieveProducts', (req, res) => {
  const category = req.query.category

  res.json(products[category])
})

api.get('/retrieveListProducts', (req, res) => {
  const list = req.query.list

  res.json(lists[list])
})

api.post('/addNewList', (req, res) => {
  const new_list = req.body.listName

  if (new_list in lists) {
    return res.json({ errorMessage: "Ya tienes una lista con ese nombre" })
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

api.post('/removeProductFromList', (req, res) => {
  const list_name = req.body.list_name
  const products = req.body.product

  const product_index = lists[list_name].indexOf(products)

  lists[list_name].splice(product_index, 1)

  res.json(lists[list_name])
})

api.post('/removeCheckedProductsFromList', (req, res) => {
  const list_name = req.body.list_name
  const products = req.body.product

  for (item of products) {
    const item_index = lists[list_name].indexOf(item)
    lists[list_name].splice(item_index, 1)
  }
  
  res.json(lists[list_name])
})

api.post('/deleteList', (req, res) => {
  const list_name = req.body.list_name

  delete lists[list_name]
  const allList = Object.keys(lists)

  res.json(allList)
})

api.post('/addCategory', (req, res) => {
  console.log(req)
  const category = req.body.new_category

  products[category] = []

  res.json([])
})

api.post('/addProduct', (req, res) => {
  const product = req.body.new_product
  const category = req.body.category

  if (category == null) {
    res.error(400).send('Missing category')
  }

  products[category].push(product)

  res.json([])
})

api.post('/deleteCategory', (req, res) => {
  const category = req.body.category_name

  delete products[category]
  const all_categories = Object.keys(products)

  res.json(all_categories)
})

api.post('/deleteProduct', (req, res) => {
  const category = req.body.category
  const product = req.body.product
  const product_index = products[category].indexOf(product)

  products[category].splice(product_index, 1)

  res.json(products[category])
})

api.listen(3000)
