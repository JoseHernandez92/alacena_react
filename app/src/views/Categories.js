import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'
import InputModal from '../components/InputModal'
import HoldButton from '../components/HoldButton'
import OptionModal from '../components/OptionModal'

function Categories({ changeAppLocation, selectCategory }) {
  const service = new Service()
  const history = useHistory()
  const [product_category, setProductCategory] = useState([])
  const [show_input_modal, setShowInputModal] = useState(false)
  const [show_option_modal, setShowOptionModal] = useState(false)
  const [category_to_delete, setCategoryToDelete] = useState('')

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

  const handleClick = (category) => {
    selectCategory(category)
    changeAppLocation(category)

    history.push("/Products")
  }

  const selectCategoryToDelete = (category) => {
    setCategoryToDelete(category)
    setShowOptionModal(true)
  }

  const deleteCategory = async () => {
    const data = {category_name: category_to_delete}
    const response = await service.deleteCategory(data)
    let all_categories = []
    while (response.length > 0) {
      all_categories.push(response.splice(0, 2))
    }
    setProductCategory(all_categories)
  }

  return (
    <div className="menu-container">
        <InputModal show={show_input_modal} acceptOption={(input_content) => {addCategory(input_content), setShowInputModal(false)}} closeModal={() => setShowInputModal(false)}/>
        <OptionModal show={show_option_modal}  message={global.i18n.delete_category} acceptOption={() => {deleteCategory(), setShowOptionModal(false)}} denyOption={() => setShowOptionModal(false)}/>
        {product_category.map((category, index) => {
          if(category.length == 1){
            return (
              <div className="row" key={index}>
              <HoldButton name={category[0]} onClick={() => handleClick(category[0])} onHold={() => selectCategoryToDelete(category[0])} className="btn btn-light btn-lg shadow-sm"/>
            </div>
            )
          }
          return (
            <div className="row" key={index}>
              <HoldButton name={category[0]} onClick={() => handleClick(category[0])} onHold={() => selectCategoryToDelete(category[0])} className="btn btn-light btn-lg shadow-sm"/>
              <HoldButton name={category[1]} onClick={() => handleClick(category[1])} onHold={() => selectCategoryToDelete(category[1])} className="btn btn-light btn-lg shadow-sm"/>
            </div>
          )
        })}
        <Button name={global.i18n.add_category} onClick={() => setShowInputModal(true)} className="btn btn-primary btn-lg shadow-sm"/>
        <Link to="/"><Button name="Retroceder" onClick={() => changeAppLocation(global.i18n.home)} className="btn btn-secondary btn-lg shadow-sm"/></Link>
    </div>
  )
}

export default Categories