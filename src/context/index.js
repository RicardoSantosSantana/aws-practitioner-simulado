import { createContext,  useState } from 'react'

export const ContextSimulacao = createContext({})

export const AwsSimulacao = ({ children }) => {
    
    const [acertos,setAcertos] = useState(0)
    const [erros,setErros] = useState(0)
        
    
    return (
        <ContextSimulacao.Provider value={{ acertos, setAcertos, erros, setErros }}>
            {children}
        </ContextSimulacao.Provider>
    )
}