import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'

function AddProduct({ onClick, currentCategory }) {
  const [products, setProducts] = useState([])
  const [last_product_added, setLastProductAdded] = useState("Añade algo")

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    fetch(`http://localhost:3000/retrieveProducts?category=${currentCategory}`)
      .then(response => {
        return response.json()
      })
      .then(response => {
        setProducts(response)
      }).catch(error => alert("error"))
  }

  const addProduct = (product) => {
    setLastProductAdded(`Has añadido: ${product}`)
  }

  return (
    <div className="products-container" >
      <div class="p-3 mb-2 bg-info text-white rounded">{last_product_added}</div>
       
      {products.map((product, index) => {
        if (product.length == 1) {
          return (
            <div className="row" key={index}>
              <Button name={product[0]} onClick={() => addProduct(product[0])} key={index} className="btn btn-light btn-lg shadow-sm" />
            </div>
          )
        }
        return (
          <div className="row" key={index}>
            <Button name={product[0]} onClick={() => addProduct(product[0])} key={index} className="btn btn-light btn-lg shadow-sm" />
            <Button name={product[1]} onClick={() => addProduct(product[1])} key={index + 1} className="btn btn-light btn-lg shadow-sm" />
          </div>
        )
      })}
      <Link to="/SelectCategory"><Button name="Retroceder" onClick={onClick} clickParameter="Productos" className="btn btn-secondary btn-lg shadow-sm" /></Link>
    </div>
  )
}

export default AddProduct