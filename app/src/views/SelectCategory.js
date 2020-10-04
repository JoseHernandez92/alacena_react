import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'

function SelectCategory({ changeAppLocation, selectCategory, list_name, shoppingMode}) {
  const [product_category, setProductCategory] = useState([])
  const history = useHistory()
  const service = new Service()

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

  const goBack = () => {
    if(shoppingMode){
      history.push("/ViewList")
      changeAppLocation(list_name)
      return
    }

    history.push("/")
    changeAppLocation(global.i18n.home)

  }

  return (
    <div className="menu-container">
      <div className="p-3 mb-2 bg-info text-white rounded">{list_name}</div>

      {product_category.map((category, index) => {
        if(category.length == 1){
          return (
            <div className="row" key={index}>
            <Link to="/AddProduct"><Button name={category[0]} onClick={() => {changeAppLocation(category[0]), selectCategory(category[0])}} className="btn btn-light btn-lg shadow-sm"/></Link>
          </div>
          )
        }
        return (
          <div className="row" key={index}>
              <Link to="/AddProduct"><Button name={category[0]} onClick={() => {changeAppLocation(category[0]), selectCategory(category[0])}} className="btn btn-light btn-lg shadow-sm"/></Link>
              <Link to="/AddProduct"><Button name={category[1]} onClick={() => {changeAppLocation(category[1]), selectCategory(category[1])}} className="btn btn-light btn-lg shadow-sm"/></Link>
          </div>
        )
      })}
      <Button name={global.i18n.back} onClick={goBack} className="btn btn-secondary btn-lg shadow-sm"/>
    </div>
  )
}

export default SelectCategory
