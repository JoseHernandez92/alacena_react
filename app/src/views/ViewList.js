import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'
import OptionModal from '../components/OptionModal'

function ViewList({ onClick, list_name }) {
  const service = new Service()
  const [products, setProducts] = useState([])
  const [show_modal, setShowModal] = useState(false)
  const [shopping_cart, setShoppingCart] = useState([])
  const [product_to_delete, setProductToDelete] = useState('')

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await service.retrieveListProducts(list_name)

    setProducts(response)
  }

  const checkProduct = (selected_product) => {
    let selected_products = shopping_cart
    if (selected_products.includes(selected_product)) {
      selected_products.splice((selected_products.indexOf(selected_product)), 1)
      setShoppingCart(selected_products)

    } else {
      selected_products.push(selected_product)
      setShoppingCart(selected_products)
    }
  }

  const selectProductToDelete = (selected_product) => {
    setShowModal(true)
    setProductToDelete(selected_product)
    
  }

  const deleteProduct = async () => {
    const data = {list_name: list_name, product: product_to_delete}
    const response = await service.deleteProductFromList(data)

    setProducts(response)
  }

  return (
    <div className="menu-container" >
      <OptionModal show={show_modal} message={global.i18n.are_you_sure} acceptOption={() => {deleteProduct(), setShowModal(false)}} denyOption={() => setShowModal(false)}/>
      {products.map((product, index) => {
        return(
        <div className="btn-group m-1" role="group" key={index}>
          <button type="button" className="btn btn-primary m-0 " >{product}</button>
          <button type="button" onClick={() => checkProduct(product)} value={product} className="btn btn btn-outline-primary w-25 m-0 p-0"><i className="fas fa-check"></i></button>
          <button type="button" onClick={() => selectProductToDelete(product)} value={product} className="btn btn btn-outline-primary w-25 m-0 p-0"><i className="fas fa-trash"></i></button>
        </div>)
      })}

      <Link to="/Lists"><Button name={global.i18n.back} onClick={onClick} clickParameter={global.i18n.my_lists} className="btn btn-secondary btn-lg shadow-sm" /></Link>
    </div>
  )
}

export default ViewList