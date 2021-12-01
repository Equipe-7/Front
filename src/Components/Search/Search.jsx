import { FaSearch } from 'react-icons/fa';
import "./Search.css"

const Search = () => {
    return (
        <div className='search-container'>
            <label className='lupa' htmlFor=""><FaSearch className='FaSearch'/></label>
            <input className='search' type="text" placeholder='PESQUISAR PRODUTOS,PROMOÇOES E LISTAS'/>
        </div>
    )
}

export default Search
