import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Button from '../components/Button'
import HoldButton from '../components/HoldButton'
import Service from '../services/Service'
import OptionModal from '../components/OptionModal'

function ShoppingLists({ changeAppLocation, setCurrentList }) {
  const service = new Service()
  const history = useHistory()
  const [shoppingLists, setShoppingLists] = useState([])
  const [selectedShoppingList, setSelectedShoppingList] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getShoppingLists()
  }, [])

  const getShoppingLists = async () => {
    const response = await service.getLists()

    setShoppingLists(response)
  }

  const handleClick = (list) => {
    changeAppLocation(list)
    setCurrentList(list)
    history.push("/ViewList")
  }

  const selectShoppingList = (list) => {
    setShowModal(true)
    setSelectedShoppingList(list)
  }

  const deleteList = async () => {
    const data = { list_name: selectedShoppingList }
    const response = await service.deleteList(data)

    setShoppingLists(response)
  }
  
  if (shoppingLists.length == 0) {
    return (
      <div className="d-flex justify-content-center m-3">
        <div className="text-center bg-info text-white rounded w-50 p-3 m-2">
        {global.i18n.no_list}
        </div>
      </div>
    )
  }

  return (
    <div className="d-flex flex-wrap justify-content-center m-3">
      <div className="d-flex flex-wrap justify-content-center w-75">
        <OptionModal 
          show={showModal} 
          message={global.i18n.delete_list} 
          acceptOption={() => { deleteList(), setShowModal(false) }} 
          denyOption={() => setShowModal(false)} 
        />
        {shoppingLists.map((list, index) => {
          return (
            <div className="d-flex justify-content-center w-50" key={index}>
              <HoldButton 
                name={list} 
                onClick={() => handleClick(list)} 
                onHold={() => selectShoppingList(list)} 
                className="btn btn-light btn-lg shadow w-75 m-3" />
            </div>
          )
        })}
      </div>
        <Link to="/" className="d-flex justify-content-center text-decoration-none w-75 m-3">
          <Button 
            name={global.i18n.back} 
            onClick={() => changeAppLocation(global.i18n.home)} 
            className="btn btn-secondary btn-lg shadow-sm w-50" />
        </Link>
    </div>
  )
}

export default ShoppingLists