/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Racoes from '../../apiTest/apiRacoes';
import "./CardRow.css";


export default (props) => {
  const [scrollX, setScrollX] = useState(-50);


  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }
  const handleRigthArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = Racoes.length * 150;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 130;
    }
    setScrollX(x)
  }


  return (
    <div className="cardRow">
      <div className="cardRow--left" onClick={handleLeftArrow}>
        <ArrowBackIosNewIcon style={{ fontSize: 50 }} />
      </div>
      <div className="cardRow--rigth" onClick={handleRigthArrow}>
        <ArrowForwardIosIcon style={{ fontSize: 50 }} />
      </div>

      <div className="cardRow--listarea">

        <div className="cardRow--list" style={{
          marginLeft: scrollX,
          width: Racoes.length * 190
        }}>
          {Racoes.length > 0 && Racoes.map((value) => (
            <div className="cardRow--item">
              <Link className="img-produto" to="/login">
                <div className="miniCard">
                  <img
                    className="img"
                    src={value.url}
                    width="224"
                    height="224"
                    alt=""
                  />
                  <div className="informacao">
                    <div className="informacao-texto">
                      <p className="decricao-texto">{value.texto}</p>
                    </div>
                    <div className="price">
                      <span className="price-item">R${value.valor}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}