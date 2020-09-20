import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'

function Categories({ onClick, selectCategory }) {
  const service = new Service()
  const [product_category, setProductCategory] = useState([])

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const response = await service.retrieveCategories()
    let categories = []
    while (response.length > 0){
      categories.push(response.splice(0, 2))
    }
    setProductCategory(categories)
  }



  return (
    <div className="categories-container">
        {product_category.map((category, index) => {
          if(category.length == 1){
            return (
              <div className="row" key={index}>
              <Link to="/Products"><Button name={category[0]} key={index} className="btn btn-light btn-lg shadow-sm"/></Link>
            </div>
            )
          }
          return (
            <div className="row" key={index}>
               <Link to="/Products"><Button name={category[0]} onClick={() => {onClick(category[0]), selectCategory(category[0])}} key={index} className="btn btn-light btn-lg shadow-sm"/></Link>
               <Link to="/Products"><Button name={category[1]} onClick={() => {onClick(category[1]), selectCategory(category[1])}} key={index + 1} className="btn btn-light btn-lg shadow-sm"/></Link>
            </div>
          )
        })}
        <Link to="/"><Button name="Retroceder" onClick={onClick} clickParameter="Inicio" className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default Categories