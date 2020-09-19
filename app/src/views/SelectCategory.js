import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'

function SelectCategory({ onClick, selectCategory, list_name }) {
  const [product_category, setProductCategory] = useState([])
  const service = new Service()

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const categories = await service.retrieveCategories()

    setProductCategory(categories)
  }

  return (
    <div className="categories-container">
      <div className="p-3 mb-2 bg-info text-white rounded">{list_name}</div>

      {product_category.map((category, index) => {
        return (
          <div className="row" key={index}>
              <Link to="/AddProduct"><Button name={category[0]} onClick={() => {onClick(category[0]), selectCategory(category[0])}} key={index} className="btn btn-light btn-lg shadow-sm"/></Link>
              <Link to="/AddProduct"><Button name={category[1]} onClick={() => {onClick(category[1]), selectCategory(category[1])}} key={index + 1} className="btn btn-light btn-lg shadow-sm"/></Link>
          </div>
        )
      })}
      <Link to="/"><Button name="Retroceder" onClick={onClick} clickParameter="Inicio" className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default SelectCategory