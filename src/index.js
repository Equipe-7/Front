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
import Brinquedos from "./Views/Produtos/Brinquedos/Brinquedos"
import Camas from "./Views/Produtos/Camas/Camas"
import Acessorios from "./Views/Produtos/Acessorios/Acessorios"
import Servicos from './Views/Servicos/Servicos';
import Hospedagem from './Views/Servicos/Hospedagem/Hospedagem';
import PetSitter from './Views/Servicos/PetSitter/PetSitter';
import PetWalker from './Views/Servicos/PetWalker/PetWalker';
import Veterinario from './Views/Veterinarios/Veterinario';
import Clinicas from "./Views/Veterinarios/Clinicas/Clinicas";
import Domicilio from "./Views/Veterinarios/Domicilio/Domicilio";

import axios from 'axios';
import Item from './Views/Item/Item';
import Carrinho from './Views/Carrinho/Carrinho';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/busca" element={<Busca />} />
          <Route path="/item" element={<Item />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/brinquedos" element={<Brinquedos />} />
          <Route path="/produtos/camas" element={<Camas />} />
          <Route path="/produtos/acessorios" element={<Acessorios />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/servicos/hospedagem" element={<Hospedagem />} />
          <Route path="/servicos/petsitter" element={<PetSitter />} />
          <Route path="/servicos/petwalker" element={<PetWalker />} />
          <Route path="/veterinarios" element={<Veterinario />} />
          <Route path="/veterinarios/clinicas" element={<Clinicas />} />
          <Route path="/veterinarios/domicilio" element={<Domicilio />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);