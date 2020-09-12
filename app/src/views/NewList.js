import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'


function NewLists() {

  return (
    <div >
        Nueva Lista
        <Link to="/"><button className="btn btn-light btn-lg shadow-sm">Retroceder</button></Link>
    </div>
  )
}

export default NewLists