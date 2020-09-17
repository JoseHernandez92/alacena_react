import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'


function SelectCategory({ onClick, selectCategory }) {
  const [product_category, setProductCategory] = useState([])

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = () => {
    fetch(`http://localhost:3000/retrieveCategories`)
    .then(response => {
      return response.json()
    })
    .then(response => {
      setProductCategory(response)
    }).catch(error => alert("error"))
  }

  return (
    <div className="categories-container">
        {product_category.map((category, index) => {
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

export default SelectCategory