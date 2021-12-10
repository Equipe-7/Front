import React from "react";
import "./MiniCardsPets.css";

const MiniCardPets = (props) => {
  return (
    <div className="miniCardPet">
      <div>
        <img className="miniCardPet-img" src={props.imagem} alt="" />
      </div>
      <div>
        <button className="mini-btn-pets">{props.tipo}</button>
      </div>
    </div>
  );
};

export default MiniCardPets;
