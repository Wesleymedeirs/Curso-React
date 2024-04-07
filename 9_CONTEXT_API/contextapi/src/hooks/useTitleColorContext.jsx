import { useContext } from "react"
import { TitleColorContext } from "../context/TitleColorContext"

//Adicionando o export antes da const é dizendo que essa constate poderá ser utilizda em outro compoente
export const useTitleColorContext = () => {

    const context = useContext(TitleColorContext)

    if(!context){
        console.log('Contexto não encontrado!')
    }
    return context;

}