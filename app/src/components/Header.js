import React from 'react'
import { Link } from 'react-router-dom'

function Header({ subtitle, changeAppLocation }) {

  return (
    <Link to="/" className="text-decoration-none">
      <header onClick={() => changeAppLocation(global.i18n.home)} className="bg-light shadow">
        <h1 className="d-flex justify-content-center text-dark font-weight-bold">Alacena</h1>
        <h4 className="d-flex justify-content-center text-secondary text-monospace ">{subtitle}</h4>
      </header>
    </Link>
  )
}

export default Header
