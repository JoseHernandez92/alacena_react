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
      let retrieved_products = []
      while (response.length > 0){
      retrieved_products.push(response.splice(0, 2))
      }
      setProducts(retrieved_products)
  }

  return (
    <div >
      {products.map((product, index) => {
        if(products == []){
          return (
            <div>This list is empty</div>
          )
        }
        if (product.length == 1) {
          return (
            <div className="row" key={index}>
              <Button name={product[0]} onClick={console.log("Hi") } key={index} className="btn btn-light btn-lg shadow-sm" />
            </div>
          )
        }
        return (
          <div className="row" key={index}>
            <Button name={product[0]} onClick={ console.log("Hi")} key={index} className="btn btn-light btn-lg shadow-sm" />
            <Button name={product[1]} onClick={console.log("Hi") } key={index + 1} className="btn btn-light btn-lg shadow-sm" />
          </div>
        )
      })}

       <Link to="/Lists"><Button name="Retroceder" onClick={onClick} clickParameter="Mis Listas" className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default ViewList