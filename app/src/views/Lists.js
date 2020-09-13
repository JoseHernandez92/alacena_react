import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'


function Lists({ onClick }) {

  return (
    <div >
        Listas
        <Link to="/"><Button name="Retroceder" onClick={onClick} clickParameter="Inicio" className="btn btn-light btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default Lists