import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'

function Home({ changeAppLocation }) {

  return (
    <div className="d-flex justify-content-center m-3"> 
      <div className="d-flex flex-wrap justify-content-center w-75">
        <Link to="/Lists" className="d-flex justify-content-center text-decoration-none w-50">
          <Button 
            name={global.i18n.my_lists} 
            onClick={() => changeAppLocation(global.i18n.my_lists)} 
            className="btn btn-light btn-lg shadow w-75 m-3" />
        </Link>
        <Link to="/NewList" className="d-flex justify-content-center text-decoration-none w-50">
          <Button 
            name={global.i18n.new_list} 
            onClick={() => changeAppLocation(global.i18n.new_list)} 
            className="btn btn-light btn-lg shadow w-75 m-3"  />
        </Link>
        <Link to="/Categories" className="d-flex justify-content-center text-decoration-none w-50">
          <Button 
            name={global.i18n.products} 
            onClick={() => changeAppLocation(global.i18n.products)} 
            className="btn btn-light btn-lg shadow w-75 m-3" />
        </Link>
        <Link to="/Options" className="d-flex justify-content-center text-decoration-none w-50">
          <Button 
            name={global.i18n.options} 
            onClick={() => changeAppLocation(global.i18n.options)} 
            className="btn btn-light btn-lg shadow w-75 m-3" />
        </Link>
      </div>
    </div>
  )
}

export default Home