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

    setProducts(response)
  }

  const addProduct = (product) => {
    setLastProductAdded(`: has añadido ${product}`)
    const data = { list: list_name, product: product }
    service.addNewProduct(data)
  }

  return (
    <div className="d-flex flex-wrap justify-content-center m-3">
      <div className="d-flex flex-wrap justify-content-center w-75" >
        <div className="p-3 mb-2 bg-info text-center text-white rounded w-75">{list_name}{last_product_added}</div>
        {products.map((product, index) => {
          return (
            <div className="d-flex justify-content-center w-50" key={index}>
              <Button name={product} onClick={() => addProduct(product)} className="btn btn-light btn-lg shadow w-75 m-3" />
            </div>
          )
        })}
        <Link to="/SelectCategory" className="d-flex justify-content-center w-50 m-3">
          <Button 
            name="Retroceder" 
            onClick={() => changeAppLocation(global.i18n.products)} 
            className="btn btn-secondary btn-lg shadow" 
          />
        </Link>
      </div>
    </div>

  )
}

export default AddProduct