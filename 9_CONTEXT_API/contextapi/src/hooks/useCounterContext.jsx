import { useContext } from "react"
import { ContadorContext } from "../context/ContadorContext"

//Adicionando o export antes da const é dizendo que essa constate poderá ser utilizda em outro compoente
export const useCounterContext = () => {

    const context = useContext(ContadorContext)

    if(!context){
        console.log('Contexto não encontrado!')
    }
    return context;

}