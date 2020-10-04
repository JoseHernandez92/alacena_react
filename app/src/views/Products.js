import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'
import InputModal from '../components/InputModal'

function Products({ changeAppLocation, currentCategory }) {
  const [products, setProducts] = useState([])
  const [show_modal, setShowModal] = useState(false)
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

  return (
    <div className="menu-container">
      <InputModal show={show_modal} acceptOption={(input_content) => {addProduct(input_content), setShowModal(false)}} closeModal={() => setShowModal(false)}/>
      {products.map((product, index) => {
        if (product.length == 1) {
          return (
            <div className="row" key={index}>
              <Button name={product[0]} className="btn btn-light btn-lg shadow-sm" />
            </div>
          )
        }
        return (
          <div className="row" key={index}>
            <Button name={product[0]} className="btn btn-light btn-lg shadow-sm" />
            <Button name={product[1]} className="btn btn-light btn-lg shadow-sm" />
          </div>
        )
      })}
      <Button name={global.i18n.add_product} onClick={() => setShowModal(true)} className="btn btn-primary btn-lg shadow-sm" />
      <Link to="/Categories"><Button name="Retroceder" onClick={() => changeAppLocation(global.i18n.products)} className="btn btn-secondary btn-lg shadow-sm" /></Link>
    </div>
  )
}

export default Products