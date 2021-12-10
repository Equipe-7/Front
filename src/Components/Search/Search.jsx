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
        name="search"
        className="search-input"
        type="text"
        onChange={(e) => setPesquisa(e.target.value)}
      />
      <label className="labe-sh" htmlFor="search">PESQUISAR PRODUTOS, SERVIÇOS, HOSPEDAGENS...</label>
    </form>
  );
};

export default Search;
