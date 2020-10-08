import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Button from '../components/Button'
import HoldButton from '../components/HoldButton'
import BackButton from '../components/BackButton'
import InputModal from '../components/InputModal'
import OptionModal from '../components/OptionModal'
import { retrieveCategoryProducts, addProductToCategory, deleteProductFromCategory} from '../services/productsRequester'

function Products({ changeAppLocation }) {
  const [products, setProducts] = useState([])
  const [show_input_modal, setShowInputModal] = useState(false)
  const [show_option_modal, setShowOptionModal] = useState(false)
  const [selected_product, setSelectedProduct] = useState('')
  const params = useParams();

  useEffect(() => {
    changeAppLocation(params.category)
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await retrieveCategoryProducts(params.category)

    setProducts(response)
  }

  const addProduct = async (input_content) => {
    const data = { category: params.category, new_product: input_content }
    await addProductToCategory(data)
    getProducts()
  }

  const selectProduct = (product) => {
    setSelectedProduct(product)
    setShowOptionModal(true)
  }

  const deleteProduct = async () => {
    const data = { category: params.category, product: selected_product }
    const response = await deleteProductFromCategory(data)

    setProducts(response)
  }

  return (
    <div className="d-flex flex-wrap justify-content-center m-3">
      <div className="d-flex flex-wrap justify-content-center w-75">
        <InputModal show={show_input_modal} acceptOption={(input_content) => { addProduct(input_content), setShowInputModal(false) }} closeModal={() => setShowInputModal(false)} />
        <OptionModal show={show_option_modal} message={global.i18n.delete_product} acceptOption={() => { deleteProduct(), setShowOptionModal(false) }} denyOption={() => setShowOptionModal(false)} />
        {products.map((product, index) => {
          return (
            <div className="d-flex justify-content-center w-50" key={index}>
              <HoldButton name={product} onHold={() => selectProduct(product)} className="btn btn-light btn-lg shadow w-75 m-3" />
            </div>
          )
        })}
        <Button name={global.i18n.add_product} onClick={() => setShowInputModal(true)} className="btn btn-primary btn-lg shadow w-75 m-3" />
        <BackButton onClick={() => changeAppLocation(global.i18n.products)}/>
      </div>
    </div>
  )
}

export default Products