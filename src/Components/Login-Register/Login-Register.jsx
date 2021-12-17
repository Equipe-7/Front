import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import"./Login-Register.css"
import { FaEye,FaEyeSlash } from "react-icons/fa";

function ModalLoginRegister(props,True) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('')
  const [CPF, setCPF] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(true)
  const [loginRegister, setLoginRegister]= useState(True)

  const handleSubmitLogin = event => {
    event.preventDefault();

    const login = {
      email: email,
      password: password
    }

    // axios.post('/auth/login', login)
    // .then(response => {
    //   const token = response.data.token;
    //   localStorage.setItem('token', token)
    // })
  }

  const handleSubmitRegister = event => {
    event.preventDefault();

    const register = {
      email: email,
      password: password,
    }

    // axios.post('/auth/login', login)
    // .then(response => {
    //   const token = response.data.token;
    //   localStorage.setItem('token', token)
    // })
  }
  
  const togleShowHidePassword= ()=>{
    setShowPass(!showPass)
  }
  
  const togleLoginRegister= ()=>{

    setLoginRegister(!loginRegister)
  }

  return (
    <>
      { loginRegister? 
        
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Entrar
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-login" onSubmit={handleSubmitLogin}>
              <input required className="input-login input-email" type="email" 
              onChange={(event) => {setEmail(event.target.value)}}  />
              <label className={`label-email ${email !== '' ? 'label-fixed-email' : ''}`}>Digite seu email*</label>

              <input required className="input-login input-password" type={!showPass? 'text': 'password'}
              onChange={(event) => {setPassword(event.target.value)}} />
              <label className={`label-password ${password !== '' ? 'label-fixed-password' : ''}`}>Digite sua senha*</label>
              
              { showPass ? 
                <div onClick={ togleShowHidePassword } className='show-password'>
                < FaEye className= 'show-hide-icon'/>
                <span className='password-text'> mostrar </span>
              </div>
                : 
                <div name='hide' onClick={ togleShowHidePassword } className='hide-password'>
                < FaEyeSlash className='show-hide-icon'/>
                <span className='password-text'> esconder </span>
              </div> }
              
              <spam className="conta">Não tem uma conta? <spam onClick={togleLoginRegister } className='criar-conta' href='/'> Crie uma nova conta </spam></spam>
              
              <button className="btn-login" type='submit'> Cadastrar </button>
            </form>
          </Modal.Body>
        </Modal>
        
        :

        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        >
          <Modal.Header className= "modal-header-register" closeButton>
            <Modal.Title  className= "modal-title-register" id="contained-modal-title-vcenter">
              Cadastrar
            </Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <form className="form-login" onSubmit={handleSubmitLogin}>
                            
                <input  required className="input-login input-name" type="text" 
                onChange={(event) => {setName(event.target.value)}}  />
                <label className={`label-name ${name !== '' ? 'label-fixed-name' : ''}`}> Seu Nome*</label>

                <input required className="input-login input-email-register" type="email" 
                onChange={(event) => {setEmail(event.target.value)}}  />
                <label className={`label-email-register ${email !== '' ? 'label-fixed-email-register' : ''}`}>Digite seu email*</label>
              

                <input className="input-login input-password-register" type={!showPass? 'text': 'password'}
                onChange={(event) => {setPassword(event.target.value)}} />
                <label className={`label-password-register ${password !== '' ? 'label-fixed-password-register' : ''}`}>Crie uma senha*</label>
              
              { showPass ? 
                <div onClick={ togleShowHidePassword } className='show-password'>
                < FaEye className= 'show-hide-icon'/>
                <span className='password-text'> mostrar </span>
              </div>
                : 
                <div name='hide' onClick={ togleShowHidePassword } className='hide-password'>
                < FaEyeSlash className='show-hide-icon'/>
                <span className='password-text'> esconder </span>
              </div> }
              
              <spam className="conta">Já tem uma conta? <spam onClick={togleLoginRegister } className='criar-conta' href='/'>Faça Login</spam></spam>
              
              <button className="btn-login" type='submit'> Cadastrar </button>
            </form>
          </Modal.Body>
        </Modal>
        
        
      }
    
    </>
  );
}

export default ModalLoginRegister