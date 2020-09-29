import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'

function Home({ changeAppLocation }) {

  return (
    <div className="menu-container">
      <div className="row">
        <Link to="/Lists"><Button name={global.i18n.my_lists} onClick={() => changeAppLocation(global.i18n.my_lists)} className="btn btn-light btn-lg shadow-sm" /></Link>
        <Link to="/NewList" ><Button name={global.i18n.new_list} onClick={() => changeAppLocation(global.i18n.new_list)} className="btn btn-light btn-lg shadow-sm" /></Link>
      </div>
      <div className="row">
        <Link to="/Categories" ><Button name={global.i18n.products} onClick={() => changeAppLocation(global.i18n.products)} className="btn btn-light btn-lg shadow-sm" /></Link>
        <Link to="/Options" ><Button name={global.i18n.options} onClick={() => changeAppLocation(global.i18n.options)} className="btn btn-light btn-lg shadow-sm" /></Link>
      </div>
    </div>
  )
}

export default Home
