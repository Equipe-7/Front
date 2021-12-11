import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalCadastro from "../Cadastro/Cadastro";
import ModalLogin from "../Login/Login";
import Search from "./../Search/Search";
import "./NavBar.css";

const NavBar = () => {
  const [logado, setLogado] = useState(false);
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const [modalCadastroShow, setModalCadastroShow] = useState(false);

  return (
    <div className="NavBar">
      <div className="navbar-logo">
        <Link className="link-logo" to="/">
          <img
            src="https://cdn.discordapp.com/attachments/915043608338513950/916463502389051423/sevenpets2.png"
            width="50%"
            alt=""
          />
        </Link>
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
              <li>Pet Sitter "cuidador a domicilio"</li>
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
              <Link to="perguntas">
                <li>Perguntas Frequentes</li>
              </Link>
              <Link to="sobre">
                <li>Sobre</li>
              </Link>
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
            <div className="qtd">
              <span>33</span>
            </div>
          </div>
          <span className="preco">R$700,00</span>
        </div>
      ) : (
        <div className="logout">
          <span
            className="cadastrar-logout"
            onClick={() => setModalCadastroShow(true)}
          >
            Cadastrar/Logar
          </span>
          <div className="carro-itens">
            <FaShoppingCart className="carrinho-lg" />
            <div>
              <span>7</span>
            </div>
          </div>
          <ModalCadastro
            show={modalCadastroShow}
            onHide={() => setModalCadastroShow(false)}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
