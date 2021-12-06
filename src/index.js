import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Card from './Components/Card/Card';
import './index.css';
import Busca from './Views/Busca/Busca';
import Home from './Views/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/busca" element={<Busca/>}/>
        </Routes>
        <Card />
        <Footer/>
      </>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// AFAF