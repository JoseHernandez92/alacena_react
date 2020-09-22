import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'

function ViewList({ onClick, list_name }) {
  const service = new Service()
  const [products, setProducts] = useState([])


  useEffect(() => {
      getProducts()
      }, [])

  const getProducts = async () => {
      const response = await service.retrieveListProducts(list_name)
      
      setProducts(response)
  }

  return (
    <div className="menu-container" >
      {products.map((product, index) => {
        if(products == []){
          return (
            <div>This list is empty</div>
          )
        }
        return (
        <div key={index}>
          {product}
          <span className="badge badge-pill badge-primary">Primary</span>
          <span className="badge badge-pill badge-dark">Dark</span>
          </div>
        )
      })}

       <Link to="/Lists"><Button name="Retroceder" onClick={onClick} clickParameter="Mis Listas" className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default ViewList