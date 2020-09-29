import React from 'react'

function OptionModal({ show, message, acceptOption, denyOption }) {

  if (show == true) {

    return (
      <div className="modal" tabIndex="-1" id="optionModal" style={{display:"block"}}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-light bg-primary">
              <h5 className="modal-title"><i className="fas fa-exclamation-circle"></i></h5>
              <button onClick={denyOption} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{message}</p>
            </div>
            <div className="modal-footer">
              <button onClick={acceptOption} type="button" className="btn btn-primary">{global.i18n.yes}</button>
              <button onClick={denyOption} type="button" className="btn btn-primary" data-dismiss="modal">{global.i18n.no}</button>
            </div>
          </div>
        </div>
      </div>
    )
    
  }
  return null


}

export default OptionModal