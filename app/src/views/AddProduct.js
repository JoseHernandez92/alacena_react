import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'

function AddProduct({ onClick, list_name, currentCategory }) {
  const [products, setProducts] = useState([])
  const [last_product_added, setLastProductAdded] = useState("")

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
    setLastProductAdded(`: has añadido ${product}`)

    const data = {list: list_name, product: product}
    fetch(`http://localhost:3000/addNewProduct`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response=> {
      return response.json()
    }).then(response =>{
      if(response.errorMessage){
        return alert(response.errorMessage)
      }
     
    }).catch(error=> alert("error"))
  }

  return (
    <div className="products-container" >
      <div className="p-3 mb-2 bg-info text-white rounded">{list_name}{last_product_added}</div>
       
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