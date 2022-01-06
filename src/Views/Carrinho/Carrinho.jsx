import React, { useState } from "react";
import Cart from "../../Components/Cart/Cart";
import "./Carrinho.css";
import Racoes from "../../apiTest/apiRacoes"

const Carrinho = () => {
  const [active, setActive] = useState("cart");

  return (
    <div className="carrinho-container">
      <ul className="progress isFocus">
        <li
          onClick={(e) => setActive("cart")}
          className={`progress-item ${active === "cart" ? "active" : ""}`}
        >
          <span>1</span> Itens do carrinho
        </li>
        <li
          onClick={() => setActive("delivery")}
          className={`progress-item ${active === "delivery" ? "active" : ""}`}
        >
          <span>2</span>Entrega
        </li>
        <li
          onClick={() => setActive("payment")}
          className={`progress-item ${active === "payment" ? "active" : ""}`}
        >
          <span>3</span>Pagamento
        </li>
      </ul>
      {active === "cart" && (
        <div className="cart-container">
          {Racoes.map((produto) => (
            <Cart img={produto.url}
            name={produto.texto}
            price={produto.valor}
            qtd="1"/>
          ))}
        </div>
      )}
      {active === "delivery" && <div>delivery</div>}
      {active === "payment" && <div>payment</div>}
    </div>
  );
};

export default Carrinho;
