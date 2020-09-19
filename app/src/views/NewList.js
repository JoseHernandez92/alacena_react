import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'

function NewLists({ onClick, setCurrentList }) {
  const service = new Service()
  const [list_name, setListName] = useState("")
  let history = useHistory()
  
  const handleInput = (event) => {
    setListName(event.target.value)
  }

  const handleClick =  () => {
    sendList() 
  }

  const sendList = async () => {
    let list = {listName: list_name}
    const response = await service.saveList(list)
    
    if(response.errorMessage){
      return alert(response.errorMessage)
    }
    onClick("Productos")
    setCurrentList(list_name)
    history.push("/SelectCategory")
  }

  return (
    <div className="newList-container">
        <input type="text" onChange={handleInput} placeholder="¿Cómo se llama tu lista?" className="form-control"></input>
        <Button name="Crear nueva lista" onClick={handleClick} className="btn btn-light btn-lg shadow-sm"/>
        <Link to="/"><Button name="Retroceder" onClick={onClick} clickParameter="Inicio" className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default NewLists