import React, {useContext} from "react";
import { CarrinhoContext } from "../../Context/carrinho";

import "./AddButton.css";


export const AddButton = ({ resultado }) => {

  const { produtos, setProdutos } = useContext(CarrinhoContext);
  
  const addProduto = () => {
    produtos.push(resultado);
    setProdutos([...produtos])
  }

  return (
    <>
      <button onClick={addProduto} className="AddButton">Adicionar</button>
    </>
  );
};