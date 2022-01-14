import React from "react";
import "./Footer.css";
import Logo from "../../Assets/img/sevenpets-h2.png";
import Caes from "../../Assets/img/sevenanimals.png"
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-container">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="" />
          <h2 className="logo-slogan">Loucos por pets, assim como você!</h2>
        </div>

        <div className="footer-itens">
          
          <ul className="itens-container">
            <h3 className="item-title"> Sobre</h3>
            <li className="item">
              <a>Conheça a 7 Pets</a>
            </li>
            <li className="item">
              <a>A Equipe 7</a>
            </li>
          </ul>

          <ul className="itens-container">
            <h3 className="item-title">Empreenda com a 7Pets</h3>
            <li className="item">
              <a>Seja um prestador de serviços pet</a>
            </li>
            <li className="item">
              <a>Venda na 7Pets - Cadastre sua empresa</a>
            </li>
          </ul>
        </div>

        <div className='social'>
          <a href='https://www.facebook.com/OriginInsider' target="blank"><FaFacebookSquare className='social-item'/></a>
          <a href='https://www.instagram.com/eaoriginals/' target="blank"><FaInstagramSquare className='social-item' /></a>
          <a href='https://twitter.com/origininsider' target="blank"><FaTwitterSquare className='social-item'/></a>
          <a href='https://www.youtube.com/channel/UCXWUa9LL0XXeqBcTCRAkVfg ' target="blank"><FaYoutubeSquare className='social-item' /></a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
