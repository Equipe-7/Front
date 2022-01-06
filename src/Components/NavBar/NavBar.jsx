import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import Search from "./../Search/Search";
import ModalLoginRegister from "./../Login-Register/Login-Register";
import "./NavBar.css";

const NavBar = () => {
  const [logado, setLogado] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="NavBar">
      <div className="navbar-logo">
        <Link className="link-logo" to="/">
          <img
            src="https://cdn.discordapp.com/attachments/915043608338513950/916463502389051423/sevenpets2.png"
            width="50%"
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar-menu">
        <Search />
        <ul className="navbar-itens">
          <li className="navbar-list">
            <Link to="/produtos" className="link-nav">
              Produtos
            </Link>
            <ul>
              <Link to="/produtos/brinquedos">
                <li>Brinquedos</li>
              </Link>
              <Link to="/produtos/camas">
                <li>Camas</li>
              </Link>
              <Link to="/produtos/roupas&acessorios">
                <li>Roupas e acessórios</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-list">
            <Link to="/servicos" className="link-nav">
              Serviços
            </Link>
            <ul>
              <Link to="/servicos/hospedagem">
                <li>hospedagem</li>
              </Link>
              <Link to="/servicos/petwalker">
                <li>Pet Walker "passeador"</li>
              </Link>
              <Link to="/servicos/petsitter">
                <li>Pet Sitter "cuidador a domicilio"</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-list">
            <Link to="/veterinarios" className="link-nav">
              Veterinarios
            </Link>
            <ul>
              <Link to="/veterinarios/clinica">
                <li>Clinica</li>
              </Link>
              <Link to="/veterinarios/domicilio">
                <li>Atendimento à domicílio</li>
              </Link>
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
        <div className="navbar-user">
          <div className="navbar-logout">
            <FiUser className="navbar-icon" />
            <div className="navbar-singinUp">
              <span>Olá, Jhonathan</span>
              <span>acessar dados</span>
            </div>
          </div>
          <div navbar="navbar-car">
            <Link to="/carrinho">
              <FaShoppingCart className="car-icon" />
            </Link>
            <div className="car-und">
              <span>7</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-user">
          <div className="navbar-logout">
            <FiUser className="navbar-icon" />
            <div className="navbar-singinUp" onClick={() => setModalShow(true)}>
              <span>Olá, Entre</span>
              <span>ou cadastre-se</span>
            </div>
            <ModalLoginRegister
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <div navbar="navbar-car">
            <FaShoppingCart className="car-icon" />
            <div className="car-und">
              <span>0</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
