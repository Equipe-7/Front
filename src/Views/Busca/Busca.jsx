import React from 'react'
import { useLocation } from 'react-router-dom';

const Busca = () => {
    const state = useLocation()
    const resultado = state.state;

    console.log(resultado)


    return (
        <div className='busca-container'>
            <h3>Resultado de busca: </h3>
            <div className='resultado-busca'>

            </div>
        </div>
    )
}

export default Busca
