import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'


function Products() {

  return (
    <div >
        products
        <Link to="/"><button className="btn btn-light btn-lg shadow-sm">Retroceder</button></Link>
    </div>
  )
}

export default Products