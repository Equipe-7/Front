import React from "react";
import Banner from "../../Components/Banner/Banner";
import MiniCardServico from "../../Components/MiniCardServiço/MiniCardServico";
import "./Home.css";
import ApiServicos from "../../Api/ApiServicosHome";
import ApiProdutos from "../../Api/ApiProdutosHome";
import MiniCardPets from "../../Components/MiniCardPets/MiniCardPets";
import ApiPets from "../../Api/ApiPetsHome";

const Home = () => {

  return (
    <div className="home">
      <h4 className="desconto"><strong>7% OFF</strong> NA SUA PRIMEIRA COMPRA</h4>
      <Banner />
      <div className="servicos">
        <h3>Principais Serviços</h3>
        <div className="servicos-mini">
          {ApiServicos.map((value) => (
            <MiniCardServico
              imagem={value.img}
              titulo={value.titulo}
              texto={value.texto}
              btn={value.btn}
            />
          ))}
        </div>
      </div>
      <div className="servicos">
        <h3>Principais Pets</h3>
        <div className="container-principais">
        {ApiPets.map((value) => (
            <MiniCardPets
            imagem={value.img}
            tipo={value.tipo}
            btn={value.btn}
            />
          ))}
        </div>
      </div>
      <div className="servicos">
        <h3>Principais Produtos</h3>
        <div className="servicos-mini">
          {ApiProdutos.map((value) => (
            <MiniCardServico
            imagem={value.img}
            titulo={value.titulo}
            texto={value.texto}
            btn={value.btn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
