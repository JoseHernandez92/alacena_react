import React, { useState } from 'react'

function InputModal({ show, acceptOption, closeModal }) {
    const [input_content, setInputContent] = useState('')

  if (show == true) {

    return (
      <div className="modal" tabIndex="-1" id="inputModal" style={{display:"block"}}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-light bg-primary">
              <h5 className="modal-title"><i className="fas fa-exclamation-circle"></i></h5>
              <button onClick={closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input onChange={(event) => setInputContent(event.target.value)}></input>
            </div>
            <div className="modal-footer">
              <button onClick={() => acceptOption(input_content)} type="button" className="btn btn-primary">Ok</button>
              <button onClick={closeModal} type="button" className="btn btn-primary" data-dismiss="modal">{global.i18n.cancel}</button>
            </div>
          </div>
        </div>
      </div>
    )
    
  }
  return null
}

export default InputModal
