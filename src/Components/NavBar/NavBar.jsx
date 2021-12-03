import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Search from "./../Search/Search";
import "./NavBar.css";

const NavBar = () => {
  const [logado, setLogado] = useState(false);

  return (
    <div className="NavBar">
      <div className="navbar-logo">
        <img
          src="https://www.seekpng.com/png/full/111-1117530_equipe-petiko-logo-cachorro-e-gato.png"
          width="50%"
          alt=""
        />
      </div>
      <div className="navbar-menu">
        <Search />
        <ul className="navbar-itens">
          <li className="navbar-list">Produtos
            <ul>
                <li>Rações</li>
                <li>Roupas</li>
                <li>Casinhas</li>
            </ul>
          </li>
          <li className="navbar-list">Brinquedos
          <ul>
                <li>Cães</li>
                <li>Gatos</li>
                <li>Outros</li>
            </ul></li>
          <li className="navbar-list">Serviços
          <ul>
                <li>Hospedagens</li>
                <li>Passeios</li>
                <li>Cuidadores</li>
            </ul></li>
          <li className="navbar-list">Veterinarios</li>
        </ul>
      </div>
      {logado ? (
        <div className="car">
          <div className="car-dados">
            <div className="car-texto">
              <span className="car-nome">Jhonathan Pinheiro</span>
            </div>
            <FaShoppingCart className="carrinho" />
            <span className="qtd">33</span>
          </div>
          <span className="preco">R$700,00</span>
        </div>
      ) : (
        <div className="logout">
            <span className="entrar-logout">Entrar</span>
            <span className="cadastrar-logout">Cadastrar</span>
        </div>
      )}
    </div>
  );
};

export default NavBar;
