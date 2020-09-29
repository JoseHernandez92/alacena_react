import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'
import HoldButton from '../components/HoldButton'
import OptionModal from '../components/OptionModal'

function Lists({ changeAppLocation, setCurrentList }) {
  const service = new Service()
  let history = useHistory()
  const [lists, setLists] = useState([])
  const [selected_list, setSelectedList] = useState('')
  const [show_modal, setShowModal] = useState(false)

  useEffect(() => {
    getLists()
  }, [])

  const getLists = async () => {
    const response = await service.getLists()
    let all_lists = []
    while (response.length > 0) {
      all_lists.push(response.splice(0, 2))
    }
    setLists(all_lists)
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
    const data = {list_name: selected_list}
    const response = await service.deleteList(data)
    let all_lists = []
    while (response.length > 0) {
      all_lists.push(response.splice(0, 2))
    }
    setLists(all_lists)
  }

  return (
    <div className="menu-container">
      <OptionModal show={show_modal}  message={global.i18n.delete_list} acceptOption={() => {deleteList(), setShowModal(false)}} denyOption={() => setShowModal(false)}/>
      {lists.map((list, index) => {
        if (list.length == 1) {
          return (
            <div className="row" key={index}>
              <HoldButton name={list[0]} onClick={() => handleClick(list[0])} onHold={() => selectList(list[0])} className="btn btn-light btn-lg shadow-sm" />
            </div>
          )
        }
        return (
          <div className="row" key={index}>
            <HoldButton name={list[0]} onClick={() => handleClick(list[0])} onHold={() => selectList(list[0])}className="btn btn-light btn-lg shadow-sm" />
            <HoldButton name={list[1]} onClick={() => handleClick(list[1])} onHold={() => selectList(list[1])}className="btn btn-light btn-lg shadow-sm" />
          </div>
        )
      })}
      <Link to="/"><Button name={global.i18n.back} onClick={() => changeAppLocation(global.i18n.home)} className="btn btn-secondary btn-lg shadow-sm" /></Link>
    </div>
  )
}

export default Lists