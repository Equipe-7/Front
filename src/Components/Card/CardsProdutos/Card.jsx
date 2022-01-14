import "./Card.css";
import { useNavigate } from "react-router-dom";
import { AddButton } from "../../AddButton/AddButton";

const CardProduto = (props) => {
  const resultado = props;

  const navigate = useNavigate();

  const goToPageBusca = () => {
    navigate("/item", { state: props });
  };

//  preciso passar como props no AddButton apenas o resultado do item especifico


  return (
    <div class="card-produtos">
      <div onClick={goToPageBusca} class="imgBx">
        <img src={props.imagem} />
      </div>
      <div class="contentBx">
        <h2>{props.texto}</h2>
        <div class="color">
          <h3>R${props.valor}</h3>
        </div>
        <AddButton resultado={resultado}/> 
      </div>
    </div>
  );
};

export default CardProduto;
