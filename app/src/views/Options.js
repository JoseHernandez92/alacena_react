import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'


function Options({ onClick }) {

  return (
    <div className="menu-container">
       Opciones
       <Link to="/"><Button name="Retroceder" onClick={onClick} clickParameter="Inicio" className="btn btn-light btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default Options