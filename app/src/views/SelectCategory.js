import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Button from '../components/Button'
import { retrieveCategories  } from '../services/categoriesRequester'


function SelectCategory({ changeAppLocation, selectCategory, list_name, shoppingMode }) {
  const [product_category, setProductCategory] = useState([])
  const history = useHistory()

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const response = await retrieveCategories()
    
    setProductCategory(response)
  }

  const goBack = () => {
    if (shoppingMode) {
      history.push("/ViewList")
      changeAppLocation(list_name)
      return
    }

    history.push("/")
    changeAppLocation(global.i18n.home)
  }

  return (
    <div className="d-flex flex-wrap justify-content-center m-3">
      <div className="d-flex flex-wrap justify-content-center w-75">
        <div className="p-3 mb-2 bg-info text-center text-white rounded w-75">{list_name}</div>
        {product_category.map((category, index) => {
          return (
            <div className="d-flex justify-content-center w-50" key={index}>
              <Link to="/AddProduct" className="d-flex justify-content-center text-decoration-none w-75 m-3">
                <Button 
                  name={category} 
                  onClick={() => { changeAppLocation(category), selectCategory(category) }} 
                  className="btn btn-light btn-lg shadow w-100 " 
                />
              </Link>
            </div>
          )
        })}
        <Button 
          name={global.i18n.back} 
          onClick={goBack} 
          className="btn btn-secondary btn-lg shadow-sm" 
        />
      </div>
    </div>
  )
}

export default SelectCategory
