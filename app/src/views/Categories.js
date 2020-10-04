import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'
import InputModal from '../components/InputModal'

function Categories({ changeAppLocation, selectCategory }) {
  const service = new Service()
  const [product_category, setProductCategory] = useState([])
  const [show_modal, setShowModal] = useState(false)

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const response = await service.retrieveCategories()
    let categories = []
    while (response.length > 0){
      categories.push(response.splice(0, 2))
    }
    setProductCategory(categories)
  }

  const addCategory = async (input_content) => {
    await service.addCategory({new_category: input_content})
    getCategories()
  }

  return (
    <div className="menu-container">
        <InputModal show={show_modal} acceptOption={(input_content) => {addCategory(input_content), setShowModal(false)}} closeModal={() => setShowModal(false)}/>
        {product_category.map((category, index) => {
          if(category.length == 1){
            return (
              <div className="row" key={index}>
              <Link to="/Products"><Button name={category[0]} onClick={() => {changeAppLocation(category[0]), selectCategory(category[0])}} className="btn btn-light btn-lg shadow-sm"/></Link>
            </div>
            )
          }
          return (
            <div className="row" key={index}>
               <Link to="/Products"><Button name={category[0]} onClick={() => {changeAppLocation(category[0]), selectCategory(category[0])}} className="btn btn-light btn-lg shadow-sm"/></Link>
               <Link to="/Products"><Button name={category[1]} onClick={() => {changeAppLocation(category[1]), selectCategory(category[1])}} className="btn btn-light btn-lg shadow-sm"/></Link>
            </div>
          )
        })}
        <Button name={global.i18n.add_category} onClick={() => setShowModal(true)} className="btn btn-primary btn-lg shadow-sm"/>
        <Link to="/"><Button name="Retroceder" onClick={() => changeAppLocation(global.i18n.home)} className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default Categories