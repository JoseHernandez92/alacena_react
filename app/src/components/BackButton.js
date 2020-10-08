import React from 'react'
import { useHistory } from 'react-router-dom'

function BackButton({ onClick, location }) {
  const history = useHistory()
  const goBack = () => {
    if(location){
      console.log(location)
      return history.push(`${location}`)
    }
    history.goBack()
  }
  return (
    <div className="d-flex justify-content-center text-decoration-none w-75 m-3">
      <button
        onClick={() => { onClick(), goBack() }}
        className="btn btn-secondary btn-lg shadow-sm w-50"
        >{global.i18n.back}
      </button>
    </div>
  )
}

export default BackButton
