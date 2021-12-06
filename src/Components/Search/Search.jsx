import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./Search.css";

const Search = () => {
  const [pesquisa, setPesquisa] = useState("");

  const navigate = useNavigate();

  const goToPageBusca = () => {
    navigate('/busca', { state: pesquisa })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    goToPageBusca()
    e.target[0].value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <label className="search-lupa" htmlFor="">
        <FaSearch className="FaSearch" />
      </label>
      <input
        className="search-input"
        type="text"
        placeholder="PESQUISAR PRODUTOS, SERVIÇOS, HOSPEDAGENS..."
        onChange={(e) => setPesquisa(e.target.value)}
      />
    </form>
  );
};

export default Search;
