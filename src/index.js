import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Busca from './Views/Busca/Busca';
import Home from './Views/Home/Home';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/busca" element={<Busca/>}/>
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);