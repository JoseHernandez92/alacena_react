import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'

function Lists({ onClick }) {
  const service = new Service()
  const [lists, setLists] = useState([])

  useEffect(() => {
    getLists() 
  }, [])

  const getLists = async () => {
    const all_lists = await service.getLists()
    setLists(all_lists)
  } 

  return (
    <div >
        {lists.map((list, index) => {
          return (
            <div className="row" key={index}>
               <Button name={list[0]} onClick={() => onClick(list[0])} key={index} className="btn btn-light btn-lg shadow-sm"/>
               <Button name={list[1]} onClick={() => onClick(list[1])} key={index + 1} className="btn btn-light btn-lg shadow-sm"/>
            </div>
          )
        })}
        <Link to="/"><Button name="Retroceder" onClick={onClick} clickParameter="Inicio" className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default Lists