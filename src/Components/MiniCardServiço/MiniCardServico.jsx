import React from 'react'
import "./MiniCardServico.css"

const MiniCardServico = (props) => {
    return (
        <div className='mini-service'>
            <div>
                <img src={props.imagem} alt="" />
            </div>
            <h4>{props.titulo}</h4>
            <span className='mini-texto'>{props.texto}</span>
            <button className='mini-btn'>{props.btn}</button>
        </div>
    )
}

export default MiniCardServico
