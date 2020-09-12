import React from 'react'

function Button({ name, onClick, clickParameter, className }) {
    return (
    <button onClick={() => onClick(clickParameter)} className={className}>{name}</button>
    )
}

export default Button
