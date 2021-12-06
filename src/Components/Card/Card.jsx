import "./Card.css";
import { Link } from "react-router-dom";

const CardLoja = () => {
  return (
    <div className="card">
      <Link className="img-produto" to="/login">
        <button className="comprar">
          <div className="miniCard">
            <img className="img"
              src="https://i1.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2021/06/vivo-pets-1024x576.png"
              width="224"
              height="224"
              alt="descrição da imagem" />
            <div className="informacao">
              <div className="price">
                <div className="item-price">
                  <a className="price-tag">
                    <span className="price-tag">
                      <span className="price-symbol">R$</span>
                      <span className="price-fraction">999</span>
                      <span className="price-decimal-space">,</span>
                      <span className="price-cents">99</span>
                    </span>
                  </a>
                </div>
              </div>
              <p className="decricao-item">Descrição do produto</p>
            </div>
          </div>
        </button>
      </Link>
    </div >
  )
}

export default CardLoja
