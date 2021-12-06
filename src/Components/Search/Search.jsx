import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  const [pesquisa, setPesquisa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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
