import React from "react";
import "./Item.css";
import { useLocation } from "react-router-dom";

const Item = () => {
  const state = useLocation();
  const resultado = state.state;

  console.log(resultado);

  return (
    <section className="item-container">
      <div className="item-box">
        <div className="item-img-box">
          <img className="item-img" src={resultado.imagem} alt="" srcset="" />
        </div>
        <div className="item-descricao">
          <h2>{resultado.texto}</h2>
          <span>{resultado.description}</span>
          <strong>{resultado.valor}</strong>
          <div className="item-btn-box">
            <button className="item-btn btn-comprar">comprar</button>
            <button className="item-btn btn-add">adicionar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
