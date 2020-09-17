import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'


function Products({ onClick, currentCategory }) {
    const [products, setProducts] = useState([])

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

  return (
    <div className="products-container" >
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