import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'

function Options({ changeAppLocation }) {
  const [language, setLanguage] = useState("")

  const select = (event) => {
    const selected_language = event.target.value
    setLanguage(selected_language)
    global.i18n = localization[selected_language]
    changeAppLocation(global.i18n.options)
  }

  return (
    <div className="d-flex justify-content-center m-3">
      <div className="d-flex flex-column justify-content-center align-items-center w-75">
        <select onChange={select} defaultValue={"Elige idioma"} className="custom-select w-50 m-3">
          <option value="en">{global.i18n.choose_language}</option>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
        <Link to="/">
          <Button 
            name={global.i18n.back} 
            onClick={() => changeAppLocation(global.i18n.home)} 
            className="btn btn-light btn-lg shadow" 
          />
        </Link>
      </div>
    </div>

  )
}

export default Options