import React, { useEffect, useState } from "react";
import "./Servicos.css"
import CardProduto from "./../../Components/Card/CardsProdutos/Card";
import axios from "axios";


const Servicos = () => {
    const [resultado, setResult] = useState([]);
    const [mounted, setMounted] = useState(false);
  
    async function getService() {
      try {
        const response = await axios.get("/services");
        setResult(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      setMounted(true);
      getService();
    }, [mounted]);
  
    return (
      <div className="resultado-busca">
        {resultado.map((v) => (
          <CardProduto
            id={v.service_id}
            imagem={v.urlImage}
            texto={v.service_name}
            valor={v.price}
            key={v.id}
          />
        ))}
      </div>
    );
  };

export default Servicos
