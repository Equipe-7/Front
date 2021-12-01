import { FaShoppingCart } from 'react-icons/fa';
import Search from "./../Search/Search"
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='navbar-logo'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg6VbQr7k4bE8m1sGjODK19nEZn-UKVChBg&usqp=CAU" width="50%" alt="" srcset="" /></div>
            <div className='navbar-itens'>
                <Search/>
                <ul className='navbar-list'>
                    <li>moda</li>
                    <li>casa</li>
                    <li>petshop</li>
                    <li>feira</li>
                    <li>serviços</li>
                    <li>eletronico</li>
                    <li>padaria</li>
                </ul>
            </div>
            <div className='car'>
                <div className='car-dados'>
                    <div className='car-texto'>
                        <span className='nome'>Jhonathan Pinheiro</span>
                        <span>casa Av T63 St. Buenos</span>
                    </div>
                    <FaShoppingCart className='carrinho'/>
                    <span className='qtd'>33</span>
                </div>
                <span className='preco'>R$700,00</span>
            </div>
            
        </div>
    )
}

export default NavBar
