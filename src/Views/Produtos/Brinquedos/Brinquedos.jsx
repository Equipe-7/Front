import React, { useEffect } from "react";
import "./Brinquedos.css";
import axios from "axios";
import { useState } from "react";
import CardLoja from "../../../Components/Card/CardsProdutos/Card"
import Resultado from "../../../Components/Resultado/Resultado";

const Brinquedos = () => {
    const [resultado, setResult] = useState([]);
    const [mounted, setMounted] = useState(false);
  
    async function getProduct() {
      try {
        const response = await axios.get("/products/");
        setResult(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      setMounted(true);
      getProduct();
    }, [mounted]);
  
    return (
      <Resultado>
        {resultado.map((v) => (
          <CardLoja
            id={v.product_id}
            imagem={v.urlImage}
            texto={v.product_name}
            valor={v.price}
            key={v.id}
          />
        ))}
      </Resultado>
    );
  };

export default Brinquedos
