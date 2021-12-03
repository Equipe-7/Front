import { FaSearch } from 'react-icons/fa';
import "./Search.css"

const Search = () => {
    return (
        <div className='search'>
            <label className='search-lupa' htmlFor=""><FaSearch className='FaSearch'/></label>
            <input className='search-input' type="text" placeholder='PESQUISAR PRODUTOS, SERVIÇOS, HOSPEDAGENS...'/>
        </div>
    )
}

export default Search
