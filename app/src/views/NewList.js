import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'


function NewLists({ onClick }) {
  const [list_name, setListName] = useState("")
  
  const handleInput = (event) => {
    setListName(event.target.value)
  }

  const handleClick = () => {
    fetch(`http://localhost:3000/addNewList`, {
      method: 'POST',
      body: JSON.stringify(list_name),
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      }
    }
    ).then(response=>response.json())
    .catch(error=> alert("error"))
  }

  return (
    <div className="newList-container">
        <input type="text" onChange={handleInput} placeholder="¿Cómo se llama tu lista?" className="form-control"></input>
        <Button name="Crear nueva lista" onClick={() => {onClick(), handleClick()}} className="btn btn-light btn-lg shadow-sm"/>
        <Link to="/"><Button name="Retroceder" onClick={onClick} clickParameter="Inicio" className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default NewLists