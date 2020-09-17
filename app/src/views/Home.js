import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'

function Home({ onClick }) {

  return (
    <div className="home-container">
      <div className="row">
        <Link to="/Lists"><Button name="Mis Listas" onClick={onClick} clickParameter="Mis Listas" className="btn btn-light btn-lg shadow-sm" /></Link>
        <Link to="/NewList" ><Button name="Nueva Lista" onClick={onClick} clickParameter="Nueva Lista" className="btn btn-light btn-lg shadow-sm" /></Link>
      </div>
      <div className="row">
        <Link to="/Categories" ><Button name='Productos' onClick={onClick} clickParameter="Productos" className="btn btn-light btn-lg shadow-sm" /></Link>
        <Link to="/Options" ><Button name='Opciones' onClick={onClick} clickParameter="Opciones" className="btn btn-light btn-lg shadow-sm" /></Link>
      </div>
    </div>
  )
}

export default Home
