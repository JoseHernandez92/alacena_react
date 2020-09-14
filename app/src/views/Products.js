import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'


function Products({ onClick, currentCategorie }) {

  return (
    <div >
        {currentCategorie}
        <Link to="/Categories"><Button name="Retroceder" onClick={onClick} clickParameter="Productos" className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default Products