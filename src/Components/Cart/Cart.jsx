import React from "react";
import "./Cart.css";

const Cart = (props) => {
  return (
    <div className="cart-item-modal">
      <img src={props.img} alt="" />
      <div>
        <span>{props.name}</span>
      </div>
      <span>{props.price}</span>
      <span>{props.qtd}</span>
      <button>X</button>
    </div>
  );
};

export default Cart;
