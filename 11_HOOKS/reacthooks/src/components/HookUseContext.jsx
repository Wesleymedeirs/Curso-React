import { useContext, createContext } from "react";

export const SomeContext = createContext()

export const HookUseContext = ({children}) => {

    const contextValue = 'Testando context'
    const contextValue2 = 'Testando context 2'

    return (
        <SomeContext.Provider value={{contextValue,contextValue2}}>
            {children}
        </SomeContext.Provider>
    )
}