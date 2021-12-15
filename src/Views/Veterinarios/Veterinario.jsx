import React, { useEffect, useState } from "react";
import CardLoja from "./../../Components/Card/Card";
import axios from "axios";

const Veterinario = () => {
  const [resultado, setResult] = useState([]);
  const [mounted, setMounted] = useState(false);

  async function getService() {
    try {
      const response = await axios.get("/vets");
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
        <CardLoja
          id={v.vet_id}
          imagem={v.urlImage}
          texto={v.vet_name}
          valor={v.vet_tel}
          key={v.id}
        />
      ))}
    </div>
  );
};

export default Veterinario;
