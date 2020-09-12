import React from 'react'

function Header({ subtitle, onClick }) {

  return (
    <header onClick={() => onClick("Home")} className="header-container bg-light shadow-sm">
      <h1 className="text-dark">Alacena</h1>
      <h4 className="text-secondary">{subtitle}</h4>
    </header>
  )
}

export default Header
