import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'


function Products({ onClick, currentCategory }) {
  const [products, setProducts] = useState([])
  const service = new Service()

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

  return (
    <div className="menu-container">
        {products.map((product, index) => {
          if(product.length == 1){
            return (
              <div className="row" key={index}>
              <Button name={product[0]} key={index} className="btn btn-light btn-lg shadow-sm"/>
            </div>
            )
          }
          return (
            <div className="row" key={index}>
               <Button name={product[0]} key={index} className="btn btn-light btn-lg shadow-sm"/>
               <Button name={product[1]} key={index + 1} className="btn btn-light btn-lg shadow-sm"/>
            </div>
          )
        })}
        <Link to="/Categories"><Button name="Retroceder" onClick={onClick} clickParameter="Productos" className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default Products