import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../components/Button'
import BackButton from '../components/BackButton'
import HoldButton from '../components/HoldButton'
import InputModal from '../components/InputModal'
import OptionModal from '../components/OptionModal'
import { retrieveCategories, addCategory, deleteCategory } from '../services/categoriesRequester'

function Categories({ changeAppLocation }) {
  const history = useHistory()
  const [product_category, setProductCategory] = useState([])
  const [show_input_modal, setShowInputModal] = useState(false)
  const [show_option_modal, setShowOptionModal] = useState(false)
  const [category_to_delete, setCategoryToDelete] = useState('')

  useEffect(() => {
    changeAppLocation(global.i18n.products)
    getCategories()
  }, [])

  const getCategories = async () => {
    const response = await retrieveCategories()

    setProductCategory(response)
  }

  const addNewCategory = async (input_content) => {
    await addCategory({ new_category: input_content })
    getCategories()
  }

  const handleClick = (category) => {
    changeAppLocation(category)

    history.push(`/Products/${category}`)
  }

  const selectCategoryToDelete = (category) => {
    setCategoryToDelete(category)
    setShowOptionModal(true)
  }

  const removeCategory = async () => {
    const data = { category_name: category_to_delete }
    const response = await deleteCategory(data)

    setProductCategory(response)
  }

  return (
    <div className="d-flex flex-wrap justify-content-center m-3">
      <div className="d-flex flex-wrap justify-content-center w-75">
        <InputModal show={show_input_modal} acceptOption={(input_content) => { addNewCategory(input_content), setShowInputModal(false) }} closeModal={() => setShowInputModal(false)} />
        <OptionModal show={show_option_modal} message={global.i18n.delete_category} acceptOption={() => { removeCategory(), setShowOptionModal(false) }} denyOption={() => setShowOptionModal(false)} />
        {product_category.map((category, index) => {
          return (
            <div className="d-flex justify-content-center w-50" key={index}>
              <HoldButton
                name={category}
                onClick={() => handleClick(category)}
                onHold={() => selectCategoryToDelete(category)}
                className="btn btn-light btn-lg shadow w-75 m-3"
              />
            </div>
          )
        })}
        <Button name={global.i18n.add_category} onClick={() => setShowInputModal(true)} className="btn btn-primary btn-lg shadow w-75 m-3" />
        <BackButton 
          onClick={() => changeAppLocation(global.i18n.products)} 
          location={`/`}
        />
      </div>
    </div>
  )
}

export default Categories