import React from 'react'

function ErrorModal({ show, message, closeError }) {
  if (show !== true) {
    return null
  }

  return (
    <div className="modal" tabIndex="-1" id="errorModal" style={{display:"block"}}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header text-light bg-primary">
            <h5 className="modal-title">Error</h5>
            <button onClick={closeError} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button onClick={closeError} type="button" className="btn btn-primary" data-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal