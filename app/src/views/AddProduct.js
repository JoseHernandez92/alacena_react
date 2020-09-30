import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'

function AddProduct({ changeAppLocation, list_name, currentCategory }) {
  const service = new Service()
  const [products, setProducts] = useState([])
  const [last_product_added, setLastProductAdded] = useState("")

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await service.retrieveProducts(currentCategory)
    let retrieved_products = []
    while (response.length > 0){
      retrieved_products.push(response.splice(0, 2))
    }
    setProducts(retrieved_products)
  }

  const addProduct = (product) => {
    setLastProductAdded(`: has añadido ${product}`)
    const data = {list: list_name, product: product}
    service.addNewProduct(data)
  }

  return (
    <div className="menu-container" >
      <div className="p-3 mb-2 bg-info text-white rounded">{list_name}{last_product_added}</div>
      {products.map((product, index) => {
        if(products == []){
          return (
            <div>This category is empty</div>
          )
        }
        if (product.length == 1) {
          return (
            <div className="row" key={index}>
              <Button name={product[0]} onClick={() => addProduct(product[0])} className="btn btn-light btn-lg shadow-sm" />
            </div>
          )
        }
        return (
          <div className="row" key={index}>
            <Button name={product[0]} onClick={() => addProduct(product[0])} className="btn btn-light btn-lg shadow-sm" />
            <Button name={product[1]} onClick={() => addProduct(product[1])} className="btn btn-light btn-lg shadow-sm" />
          </div>
        )
      })}
      <Link to="/SelectCategory"><Button name="Retroceder" onClick={() => changeAppLocation(global.i18n.products)} className="btn btn-secondary btn-lg shadow-sm" /></Link>
    </div>
  )
}

export default AddProduct