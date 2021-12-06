import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import './index.css';
import Home from './Views/Home/Home';
import Login from './Views/Login/Login';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// AFAF