import React from "react";
import "./Footer.css";
import Logo from "../../Assets/img/sevenpets-h2.png";

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
            <h3 className="item-title"> Titulo</h3>
            <li className="item">
              <a>footer item</a>
            </li>
            <li className="item">
              <a>footer item</a>
            </li>
            <li className="item">
              <a>footer item</a>
            </li>
            <li className="item">
              <a>footer item</a>
            </li>
          </ul>

          <ul className="itens-container">
            <h3 className="item-title"> Titulo</h3>
            <li className="item">
              <a>footer item</a>
            </li>
            <li className="item">
              <a>footer item</a>
            </li>
            <li className="item">
              <a>footer item</a>
            </li>
            <li className="item">
              <a>footer item</a>
            </li>
          </ul>

          <ul className="itens-container">
            <h3 className="item-title"> Titulo</h3>
            <li className="item">
              <a>footer item</a>
            </li>
            <li className="item">
              <a>footer item</a>
            </li>
            <li className="item">
              <a>footer item</a>
            </li>
            <li className="item">
              <a>footer item</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
