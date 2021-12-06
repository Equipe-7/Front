import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./Search.css";

const Search = () => {
  // valor do campo do imput
  const [pesquisa, setPesquisa] = useState("");

  // funcao do input de pesquisa
  const handleSubmit = (e) => {
    // evita efeito de carregamento de pagina apos enviar form de pesquisa
    e.preventDefault();

    // logica do search ->
    
    
    //<- fim da logica do search

    // limpa input de pesquisa
    e.target[0].value = "";
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className="search">
        <label className="search-lupa" htmlFor="">
          <FaSearch className="FaSearch" />
        </label>
        <input
          onChange={(event) => setPesquisa(event.target.value)}
          className="search-input"
          type="text"
          value={pesquisa}
          placeholder="PESQUISAR PRODUTOS, SERVIÇOS, HOSPEDAGENS..."
        />
      </form>
    </div>
  );
};

export default Search;
