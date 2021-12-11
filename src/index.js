import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Busca from './Views/Busca/Busca';
import Home from './Views/Home/Home';
import './index.css';
import Produtos from './Views/Produtos/Produtos';
import Servicos from './Views/Servicos/Servicos';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/busca" element={<Busca/>}/>
          <Route path="/busca" element={<Produtos/>}/>
          <Route path="/busca" element={<Servicos/>}/>
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);