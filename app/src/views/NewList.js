import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Button from '../components/Button'
import ErrorModal from '../components/ErrorModal'
import Service from '../services/Service'

function NewLists({ changeAppLocation, setCurrentList }) {
  const service = new Service()
  let history = useHistory()
  const [list_name, setListName] = useState("")
  const [show_error, setShowError] = useState(false)
  const [message_error, setMessageError] = useState("")
  
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
      setMessageError(response.errorMessage)
      setShowError(true)
      return
    }
    changeAppLocation(global.i18n.products)
    setCurrentList(list_name)
    history.push("/SelectCategory")
  }

  return (
    <div>
        <ErrorModal show={show_error} message={message_error} closeError={() => setShowError(false)}/>
    <div className="newList-container">
        <input type="text" onChange={handleInput} placeholder={global.i18n.add_new_list_placeholder} className="form-control"></input>
        <Button name={global.i18n.add_new_list} onClick={handleClick} className="btn btn-light btn-lg shadow-sm"/>
        <Link to="/"><Button name={global.i18n.back} onClick={() => changeAppLocation(global.i18n.home)} className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
    </div>
  )
}

export default NewLists
