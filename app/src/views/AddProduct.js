import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { retrieveCategoryProducts, addProductToShoppingList } from '../services/productsRequester'

function AddProduct({ changeAppLocation }) {
  const [products, setProducts] = useState([])
  const [last_product_added, setLastProductAdded] = useState("")
  const params = useParams()

  useEffect(() => {
    changeAppLocation(params.category)
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await retrieveCategoryProducts(params.category)

    setProducts(response)
  }

  const addProduct = (event) => {
    const product = event.target.innerHTML
    setLastProductAdded(`: ${global.i18n.last_added} ${product}`)
    
    const data = { list: params.list, product: product }
    addProductToShoppingList(data)
  }

  return (
    <div className="d-flex flex-wrap justify-content-center m-3">
      <div className="d-flex flex-wrap justify-content-center w-75" >
        <div className="p-3 mb-2 bg-info text-center text-white rounded w-75">
          {params.list}{last_product_added}
        </div>
        {products.map((product, index) => {
          return (
            <div className="d-flex justify-content-center w-50" key={index}>
              <Button 
                name={product} onClick={addProduct} 
                className="btn btn-light btn-lg shadow w-75 m-3" 
              />
            </div>
          )
        })}
        <BackButton 
          onClick={() => changeAppLocation(global.i18n.products)} 
          location={`/SelectCategory/${params.list}`}
        />
      </div>
    </div>
  )
}

export default AddProduct