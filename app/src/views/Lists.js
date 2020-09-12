import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'


function Lists() {

  return (
    <div >
        Listas
        <Link to="/"><button className="btn btn-light btn-lg shadow-sm">Retroceder</button></Link>
    </div>
  )
}

export default Lists