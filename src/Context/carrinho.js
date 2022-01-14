import { createContext } from "react";
import { useLocalStorage } from "react-use";

export const CarrinhoContext = createContext("Carrinho")

export const CarrinhoContextProvider = ({children}) =>{
    const [produtos, setProdutos] = useLocalStorage("listaProdutos", [])
    return <CarrinhoContext.Provider value={{produtos, setProdutos}}>{children}</CarrinhoContext.Provider>
}