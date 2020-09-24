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
        return (
        <div key={index}>
          {product}
          <span className="badge badge-pill badge-primary"><i className="fas fa-check"></i></span>
          <span className="badge badge-pill badge-dark"><i className="fas fa-trash"></i></span>
          </div>
        )
      })}

       <Link to="/Lists"><Button name="Retroceder" onClick={onClick} clickParameter="Mis Listas" className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default ViewList