// Aula 1 - Criando contexto

import { createContext, useState } from "react";

export const ContadorContext = createContext()

//Aula 2 - Criando provider
export const ContadorContextProvider = ({children}) => {

    const [counter, setCounter] = useState(0)
    const [nome, setNome] = useState('Aguardando clique')

    return(
        <ContadorContext.Provider value={{counter,nome, setCounter, setNome}}>
            {children}
        </ContadorContext.Provider>
    )
}