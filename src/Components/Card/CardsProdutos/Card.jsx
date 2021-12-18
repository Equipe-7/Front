import "./Card.css";
import { Link } from "react-router-dom";

const CardProduto = (props) => {
  console.log(props);
  return (
    <Link className="img-produto" to="/login">
      <div class="card-produtos">
        <div class="imgBx">
          <img src={props.imagem}/>
        </div>
        <div class="contentBx">
          <h2>{props.texto}</h2>
          <div class="color">
            <h3>R${props.valor}</h3>
          </div>
          <a href="#">Comprar</a>
        </div>
      </div>
    </Link>
  );
};

export default CardProduto;
