import React from 'react'
import "./Resultado.css"

const Resultado = (props) => {
    return (
        <section className='resultado'>
            {props.children}
        </section>
    )
}

export default Resultado