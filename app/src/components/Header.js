import React from 'react'
import { Link } from 'react-router-dom'

function Header({ subtitle, onClick }) {

  return (
    <Link to="/">
      <header onClick={() => onClick(global.i18n.my_lists)} className="bg-light shadow-sm">
        <h1 className="text-dark">Alacena</h1>
        <h4 className="text-secondary">{subtitle}</h4>
      </header>
    </Link>
  )
}

export default Header
