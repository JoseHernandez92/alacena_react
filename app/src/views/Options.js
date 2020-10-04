import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'

function Options({ changeAppLocation }) {
  const [language, setLanguage] = useState("")

  const select = (event) => {
    const selected_language = event.target.value
    setLanguage(selected_language)
    if (selected_language == "English"){
      global.i18n = localization.en
    }
    if (selected_language == "Spanish"){
      global.i18n = localization.es
    }
  }

  return (
    <div className="menu-container">
       <select onChange={select} defaultValue={"Elige idioma"} className="custom-select" id="inlineFormCustomSelect">
        <option >{global.i18n.choose_language}</option>
        <option value="English">English</option>
        <option value="Spanish">Español</option>
      </select>
      <Link to="/"><Button name={global.i18n.back} onClick={() => changeAppLocation(global.i18n.home)} className="btn btn-light btn-lg shadow-sm" /></Link>
    </div>
  )
}

export default Options