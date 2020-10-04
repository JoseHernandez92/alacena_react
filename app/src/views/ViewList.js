import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Button from '../components/Button'
import Service from '../services/Service'
import OptionModal from '../components/OptionModal'

function ViewList({ changeAppLocation, list_name, activateShoppingMode }) {
  const service = new Service()
  const history = useHistory()
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

  const checkProduct = (selected_product, index) => {
    const product_button = document.getElementById(`button${index}`)
    let selected_products = shopping_cart
    if (selected_products.includes(selected_product)) {
      selected_products.splice((selected_products.indexOf(selected_product)), 1)
      setShoppingCart(selected_products)
      product_button.className = 'btn btn-primary m-0'
      product_button.innerHTML = selected_product


    } else {
      selected_products.push(selected_product)
      setShoppingCart(selected_products)
      product_button.className = 'btn btn-outline-primary m-0'
      product_button.innerHTML = `<del>${selected_product}</del>`
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

  const finishShopping = () => {
    const data = {list_name: list_name, product: shopping_cart}
    service.deleteProductFromList(data)

    changeAppLocation(global.i18n.home)
    history.push("/")
  }

  return (
    <div className="menu-container" >
      <OptionModal show={show_modal} message={global.i18n.are_you_sure} acceptOption={() => {deleteProduct(), setShowModal(false)}} denyOption={() => setShowModal(false)}/>
      {products.map((product, index) => {
        return(
        <div className="btn-group m-1" role="group" key={index}>
          <button type="button" className="btn btn-primary m-0" id={`button${index}`}>{product}</button>
          <button type="button" onClick={() => checkProduct(product, index)} value={product} className="btn btn btn-outline-primary w-25 m-0 p-0"><i className="fas fa-check"></i></button>
          <button type="button" onClick={() => selectProductToDelete(product)} value={product} className="btn btn btn-outline-primary w-25 m-0 p-0"><i className="fas fa-trash"></i></button>
        </div>)
      })}
      <Link to="/SelectCategory"><Button name={global.i18n.add_more} onClick={() => {activateShoppingMode(true), changeAppLocation(global.i18n.products)}}className="btn btn-primary"/></Link>
      <Button name={global.i18n.done} onClick={finishShopping} className="btn btn-secondary btn-lg shadow-sm" />
      <Link to="/Lists"><Button name={global.i18n.back} onClick={() => changeAppLocation(global.i18n.my_lists)} className="btn btn-secondary btn-lg shadow-sm" /></Link>
    </div>
  )
}

export default ViewList