import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'


function Home() {

  return (
    <div className="home-container">
      <div className="first-row">
      <Link to="/Lists"><button className="btn btn-light btn-lg shadow-sm">Mis Listas</button></Link>
      <Link to="/NewList" ><Button name='Nueva Lista' className="btn btn-light btn-lg shadow-sm"/></Link>
      </div>
      <div className="second-row">
      <Link to="/Products" ><Button name='Productos' className="btn btn-light btn-lg shadow-sm"/></Link>
      <Link to="/Options" ><Button name='Opciones' className="btn btn-light btn-lg shadow-sm"/></Link>
      </div>
    </div>
  )
}

export default Home