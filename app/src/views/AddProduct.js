import React, { useEffect, useState } from 'react'

import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { retrieveCategoryProducts, addProductToShoppingList } from '../services/productsRequester'

function AddProduct({ changeAppLocation, list_name, currentCategory }) {
  const [products, setProducts] = useState([])
  const [last_product_added, setLastProductAdded] = useState("")

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await retrieveCategoryProducts(currentCategory)

    setProducts(response)
  }

  const addProduct = (event) => {
    const product = event.target.innerHTML
    setLastProductAdded(`: has añadido ${product}`)
    const data = { list: list_name, product: product }
    addProductToShoppingList(data)
  }

  return (
    <div className="d-flex flex-wrap justify-content-center m-3">
      <div className="d-flex flex-wrap justify-content-center w-75" >
        <div className="p-3 mb-2 bg-info text-center text-white rounded w-75">{list_name}{last_product_added}</div>
        {products.map((product, index) => {
          return (
            <div className="d-flex justify-content-center w-50" key={index}>
              <Button name={product} onClick={addProduct} className="btn btn-light btn-lg shadow w-75 m-3" />
            </div>
          )
        })}
        <BackButton onClick={() => changeAppLocation(global.i18n.products)}/>
      </div>
    </div>

  )
}

export default AddProduct