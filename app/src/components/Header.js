import React from 'react'
import { Link } from 'react-router-dom'

function Header({ subtitle, changeAppLocation }) {

  return (
    <Link to="/">
      <header onClick={() => changeAppLocation(global.i18n.home)} className="bg-light shadow-sm">
        <h1 className="text-dark">Alacena</h1>
        <h4 className="text-secondary">{subtitle}</h4>
      </header>
    </Link>
  )
}

export default Header
