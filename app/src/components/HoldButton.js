import React from 'react'

function HoldButton({ name, onClick, onHold, className }) {

    let clickHoldTimer = null
    let isHold = false

    const handleMouseDown = () => {
        clickHoldTimer = setTimeout(() => {
            isHold = true
            onHold()
        }, 800)
    }

    const handleMouseUp = () => {
        if(isHold){
            setTimeout(() => {
                isHold = false
              }, 200);
        }
        clearTimeout(clickHoldTimer)
    }

    const handleOnClick = () => {
        if(isHold){
            return console.log
        }
        onClick()
    }


    return (
    <button onClick={handleOnClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={className}>{name}</button>
    )
}

export default HoldButton
