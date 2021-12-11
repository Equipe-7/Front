import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalCadastro from "../Cadastro/Cadastro";
import Search from "./../Search/Search";
import "./NavBar.css";


const NavBar = () => {
  const [logado, setLogado] = useState(true);
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
<<<<<<< Updated upstream
              <li>Doações</li>
              <li>Area de adoção</li>
=======
              <Link to="perguntas">
                <li>Perguntas Frequentes</li>
              </Link>
              <Link to="sobre">
                <li>Sobre</li>
              </Link>
>>>>>>> Stashed changes
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
          <span className="cadastrar-logout" onClick={() => setModalCadastroShow(true)}>
            Cadastrar
          </span>
          <ModalCadastro show={modalCadastroShow}
            onHide={() => setModalCadastroShow(false)}
          />

          <span className="entrar-logout" onClick={() => setModalLoginShow(true)}>
            Entrar
          </span>
          <ModalLogin
            show={modalLoginShow}
            onHide={() => setModalLoginShow(false)}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
