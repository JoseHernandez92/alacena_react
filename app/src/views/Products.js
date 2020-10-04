import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import HoldButton from '../components/HoldButton'
import Service from '../services/Service'
import InputModal from '../components/InputModal'
import OptionModal from '../components/OptionModal'

function Products({ changeAppLocation, currentCategory }) {
  const [products, setProducts] = useState([])
  const [show_input_modal, setShowInputModal] = useState(false)
  const [show_option_modal, setShowOptionModal] = useState(false)
  const [selected_product, setSelectedProduct] = useState('')
  const service = new Service()

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await service.retrieveProducts(currentCategory)
    let retrieved_products = []
    while (response.length > 0) {
      retrieved_products.push(response.splice(0, 2))
    }
    setProducts(retrieved_products)
  }

  const addProduct = async (input_content) => {
    const data = {category: currentCategory, new_product:input_content}
    await service.addProduct(data)
    getProducts()
  }

  const selectProduct = (product) => {
    setSelectedProduct(product)
    setShowOptionModal(true)
  }

  const deleteProduct = async () => {
    const data = {category: currentCategory, product: selected_product}
    const response = await service.deleteProduct(data)
    let all_products = []
    while (response.length > 0) {
      all_products.push(response.splice(0, 2))
    }
    setProducts(all_products)
  }

  return (
    <div className="menu-container">
      <InputModal show={show_input_modal} acceptOption={(input_content) => {addProduct(input_content), setShowInputModal(false)}} closeModal={() => setShowInputModal(false)}/>
      <OptionModal show={show_option_modal}  message={global.i18n.delete_product} acceptOption={() => {deleteProduct(), setShowOptionModal(false)}} denyOption={() => setShowOptionModal(false)}/>
      {products.map((product, index) => {
        if (product.length == 1) {
          return (
            <div className="row" key={index}>
              <HoldButton name={product[0]} onHold={() => selectProduct(product[0])} className="btn btn-light btn-lg shadow-sm"/>
            </div>
          )
        }
        return (
          <div className="row" key={index}>
            <HoldButton name={product[0]} onHold={() => selectProduct(product[0])} className="btn btn-light btn-lg shadow-sm"/>
            <HoldButton name={product[1]} onHold={() => selectProduct(product[1])} className="btn btn-light btn-lg shadow-sm"/>
          </div>
        )
      })}
      <Button name={global.i18n.add_product} onClick={() => setShowInputModal(true)} className="btn btn-primary btn-lg shadow-sm" />
      <Link to="/Categories"><Button name="Retroceder" onClick={() => changeAppLocation(global.i18n.products)} className="btn btn-secondary btn-lg shadow-sm" /></Link>
    </div>
  )
}

export default Products