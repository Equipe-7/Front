import React from 'react'
import "./Button.css"

const Button = (props) => {
    return (
        <button type='submite' className={`button ${props.color}`} >
            {props.children}
        </button>
    )
}

export default Button
