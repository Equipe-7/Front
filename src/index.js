import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import './index.css';
import Home from './Views/Home/Home';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// AFAF