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

    setProductCategory(response)
  }

  const addCategory = async (input_content) => {
    await service.addCategory({ new_category: input_content })
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
    const data = { category_name: category_to_delete }
    const response = await service.deleteCategory(data)

    setProductCategory(response)
  }

  return (
    <div className="d-flex flex-wrap justify-content-center m-3">
      <div className="d-flex flex-wrap justify-content-center w-75">
        <InputModal show={show_input_modal} acceptOption={(input_content) => { addCategory(input_content), setShowInputModal(false) }} closeModal={() => setShowInputModal(false)} />
        <OptionModal show={show_option_modal} message={global.i18n.delete_category} acceptOption={() => { deleteCategory(), setShowOptionModal(false) }} denyOption={() => setShowOptionModal(false)} />
        {product_category.map((category, index) => {
          return (
            <div className="d-flex justify-content-center w-50" key={index}>
              <HoldButton
                name={category}
                onClick={() => handleClick(category)}
                onHold={() => selectCategoryToDelete(category[0])}
                className="btn btn-light btn-lg shadow w-75 m-3"
              />
            </div>
          )
        })}
        <Button name={global.i18n.add_category} onClick={() => setShowInputModal(true)} className="btn btn-primary btn-lg shadow w-75 m-3" />
        <Link to="/" className="d-flex justify-content-center text-decoration-none w-50 m-3">
          <Button
            name="Retroceder"
            onClick={() => changeAppLocation(global.i18n.home)}
            className="btn btn-secondary btn-lg shadow"
          />
        </Link>
      </div>
    </div>
  )
}

export default Categories