import "./Card.css";
import { useNavigate } from "react-router-dom";

const CardProduto = (props) => {
  const navigate = useNavigate();

  const goToPageBusca = () => {
    navigate("/item", { state: props });
  };

  return (
    <div onClick={goToPageBusca} class="card-produtos">
      <div class="imgBx">
        <img src={props.imagem} />
      </div>
      <div class="contentBx">
        <h2>{props.texto}</h2>
        <div class="color">
          <h3>R${props.valor}</h3>
        </div>
        <a href="#">Comprar</a>
      </div>
    </div>
  );
};

export default CardProduto;
