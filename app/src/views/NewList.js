import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../components/Button'
import BackButton from '../components/BackButton'
import ErrorModal from '../components/ErrorModal'
import { saveShoppingList } from '../services/shoppingListRequester'

function NewLists({ changeAppLocation }) {
  const history = useHistory()
  const [list_name, setListName] = useState("")
  const [show_error, setShowError] = useState(false)
  const [message_error, setMessageError] = useState("")
  
  const handleInput = (event) => {
    setListName(event.target.value)
  }

  const sendList = async () => {
    let list = {listName: list_name}
    const response = await saveShoppingList(list)
    
    if(response.errorMessage){
      setMessageError(response.errorMessage)
      setShowError(true)
      return
    }
    changeAppLocation(global.i18n.products)
    history.push(`/SelectCategory/${list_name}`)
  }

  return (
    <div className="d-flex flex-column align-items-center m-2">
      <ErrorModal 
        show={show_error} 
        message={message_error} 
        closeError={() => setShowError(false)}
      />
      <div className="d-flex justify-content-center flex-wrap w-75 m-2">
        <input 
          onChange={handleInput} 
          placeholder={global.i18n.add_new_list_placeholder} 
          className="form-control w-75 m-2">
        </input>
        <Button 
          name={global.i18n.add_new_list} 
          onClick={sendList} 
          className="btn btn-light btn-lg shadow-sm w-50 m-2"
        />
      </div>
      <BackButton onClick={() => changeAppLocation(global.i18n.home)}/>
    </div>
  )
}

export default NewLists
