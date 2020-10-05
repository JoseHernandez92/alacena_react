import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'
import HoldButton from '../components/HoldButton'
import OptionModal from '../components/OptionModal'

function Lists({ changeAppLocation, setCurrentList }) {
  const service = new Service()
  const history = useHistory()
  const [lists, setLists] = useState([])
  const [selected_list, setSelectedList] = useState('')
  const [show_modal, setShowModal] = useState(false)

  useEffect(() => {
    getLists()
  }, [])

  const getLists = async () => {
    const response = await service.getLists()

    setLists(response)
  }

  const handleClick = (list) => {
    changeAppLocation(list)
    setCurrentList(list)
    history.push("/ViewList")
  }

  const selectList = (list) => {
    setShowModal(true)
    setSelectedList(list)
  }

  const deleteList = async () => {
    const data = { list_name: selected_list }
    const response = await service.deleteList(data)

    setLists(response)
  }

  if (lists.length == 0) {
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
          show={show_modal} 
          message={global.i18n.delete_list} 
          acceptOption={() => { deleteList(), setShowModal(false) }} 
          denyOption={() => setShowModal(false)} 
        />
        {lists.map((list, index) => {
          return (
            <div className="d-flex justify-content-center w-50" key={index}>
              <HoldButton 
                name={list} 
                onClick={() => handleClick(list)} 
                onHold={() => selectList(list)} 
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

export default Lists