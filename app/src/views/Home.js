import React from 'react'

import Button from '../components/Button'

function Home() {

  return (
    <div className="home-container">
      <div className="first-row">
      <Button name='Mis Listas' onClick={console.log("Hola")} clickParameter='listsView' className="btn btn-light btn-lg shadow-sm"/>
      <Button name='Nueva Lista' onClick={console.log("Hola")} clickParameter='newListView' className="btn btn-light btn-lg shadow-sm"/>
      </div>
      <div className="second-row">
      <Button name='Productos' onClick={console.log("Hola")} clickParameter='productsView' className="btn btn-light btn-lg shadow-sm"/>
      <Button name='Opciones' onClick={console.log("Hola")} clickParameter='optionsView' className="btn btn-light btn-lg shadow-sm"/>
      </div>
    </div>
  )
}

export default Home