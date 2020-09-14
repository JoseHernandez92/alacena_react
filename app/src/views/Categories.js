import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'


function Categories({ onClick, selectCategorie }) {
  const [product_categorie, setProductCategorie] = useState([])

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = () => {
    fetch(`http://localhost:3000/retrieveCategories`)
    .then(response => {
      return response.json()
    })
    .then(response => {
      setProductCategorie(response)
    }).catch(error => alert("error"))
  }

  return (
    <div className="products-container">
        {product_categorie.map((categorie, index) => {
          return (
            <div className="row" key={index}>
               <Link to="/Products"><Button name={categorie[0]} onClick={selectCategorie} clickParameter={categorie[0]} key={index} className="btn btn-light btn-lg shadow-sm"/></Link>
               <Link to="/Products"><Button name={categorie[1]} onClick={selectCategorie} clickParameter={categorie[1]} key={index + 1} className="btn btn-light btn-lg shadow-sm"/></Link>
            </div>
          )
        })}
        <Link to="/"><Button name="Retroceder" onClick={onClick} clickParameter="Inicio" className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default Categories