import React from 'react'
import Button from '../../Components/Button/Button'
import "./Login.css"

const Login = () => {
    return (
        <div className='login-container'>
            <form className="login-form">
                <input type="email" name="email" id="email" placeholder='Digite seu email'/>
                <input type="password" name="senha" id="senha" placeholder='Digite sua senha'/>
                <Button color="roxo">login</Button>
            </form>
        </div>
    )
}

export default Login
