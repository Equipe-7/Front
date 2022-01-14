import React, { useState, useContext } from "react";
import { CarrinhoContext } from "../../Context/carrinho";
import Cart from "../../Components/Cart/Cart";
import { Entrega } from "../Entrega/Entrega";
import { Pagamento } from "../Pagamento/Pagamento";
import "./Carrinho.css";

const Carrinho = () => {
  const [active, setActive] = useState("cart");

  const { produtos } = useContext(CarrinhoContext);

  let totalProdutos = 0

  produtos.map((v,i) => (
    totalProdutos = totalProdutos + produtos[i].valor
  ))

  

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
          <div className="total-produtos">Total: R$ {totalProdutos}</div>
          {produtos.map((produto) => (
            <Cart
              img={produto.imagem}
              name={produto.texto}
              price={produto.valor}
              qtd="1"
            />
          ))}
        </div>
      )}
      {active === "delivery" && <div>{<Entrega />}</div>}
      {active === "payment" && <div>{<Pagamento />}</div>}
    </div>
  );
};

export default Carrinho;
