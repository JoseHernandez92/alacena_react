import React from 'react'

function HoldButton({ name, onClick = () => {}, onHold, className }) {

    let clickHoldTimer = null
    let isOnHold = false

    const handleMouseDown = () => {
        clickHoldTimer = setTimeout(() => {
            isOnHold = true
            onHold()
        }, 800)
    }

    const handleMouseUp = () => {
        if (isOnHold) {
            setTimeout(() => {
                isOnHold = false
              }, 200);
        }
        clearTimeout(clickHoldTimer)
    }

    const handleOnClick = () => {
        if (isOnHold) {
            return
        }
        onClick()
    }


    return (
        <button onClick={handleOnClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={className}>{name}</button>
    )
}

export default HoldButton
