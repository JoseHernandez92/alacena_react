import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'

function Lists({ onClick, setCurrentList }) {
  const service = new Service()
  const [lists, setLists] = useState([])

  useEffect(() => {
    getLists() 
  }, [])

  const getLists = async () => {
    const response = await service.getLists()
    let all_lists = []
    while (response.length > 0){
      all_lists.push(response.splice(0, 2))
    }
    setLists(all_lists)
  } 

  return (
    <div >
        {lists.map((list, index) => {
          if(list.length == 1){
            return (
              <div className="row" key={index}>
              <Link to="/ViewList"><Button name={list[0]} onClick={() => onClick(list[0]), setCurrentList(list[0])} key={index} className="btn btn-light btn-lg shadow-sm"/></Link>
            </div>
            )
          }
          return (
            <div className="row" key={index}>
               <Link to="/ViewList"><Button name={list[0]} onClick={() => onClick(list[0]), setCurrentList(list[0])} key={index} className="btn btn-light btn-lg shadow-sm"/></Link>
               <Link to="/ViewList"><Button name={list[1]} onClick={() => onClick(list[1]), setCurrentList(list[1])} key={index + 1} className="btn btn-light btn-lg shadow-sm"/></Link>
            </div>
          )
        })}
        <Link to="/"><Button name="Retroceder" onClick={onClick} clickParameter="Inicio" className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default Lists