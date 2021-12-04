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
          src="https://cdn.discordapp.com/attachments/915043608338513950/916463502389051423/sevenpets2.png"
          width="50%"
          alt=""
        />
      </div>
      <div className="navbar-menu">
        <Search />
        <ul className="navbar-itens">
          <li className="navbar-list">
            Produtos
            <ul>
              <li>Brinquedos</li>
              <li>Camas</li>
              <li>Roupas e acessórios</li>
            </ul>
          </li>
          <li className="navbar-list">
            Serviços
            <ul>
              <li>hospedagem</li>
              <li>Pet Walker "passeador"</li>
              <li>Pet sister "cuidador a domicilio"</li>
            </ul>
          </li>
          <li className="navbar-list">
            Veterinarios
            <ul>
              <li>Clinica</li>
              <li>Atendimento à domicílio</li>
            </ul>
          </li>
          <li className="navbar-list">
            Mais
            <ul>
              <li>Doações</li>
              <li>Area de adoção</li>
            </ul>
          </li>
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
