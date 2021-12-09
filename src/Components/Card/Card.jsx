import "./Card.css";
import { Link } from "react-router-dom";

const CardLoja = (props) => {
  return (
    <Link className="img-produto" to="/login">
      <div className="miniCard">
        <img
          className="img"
          src={props.imagem}
          width="224"
          height="224"
          alt={props.texto}
        />
        <div className="informacao">
          <div className="informacao-texto">
            <p className="decricao-texto">{props.texto}</p>
          </div>
          <div className="price">
              <span className="price-item">R${props.valor}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardLoja;
