import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'


function Products({ onClick, currentCategorie }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
      }, [])
    
      const getProducts = () => {
        fetch(`http://localhost:3000/retrieveProducts?categorie=${currentCategorie}`)
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
              <Link to="/Products"><Button name={product[0]} key={index} className="btn btn-light btn-lg shadow-sm"/></Link>
            </div>
            )
          }
          return (
            <div className="row" key={index}>
               <Link to="/Products"><Button name={product[0]} key={index} className="btn btn-light btn-lg shadow-sm"/></Link>
               <Link to="/Products"><Button name={product[1]} key={index + 1} className="btn btn-light btn-lg shadow-sm"/></Link>
            </div>
          )
        })}
        <Link to="/Categories"><Button name="Retroceder" onClick={onClick} clickParameter="Productos" className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default Products