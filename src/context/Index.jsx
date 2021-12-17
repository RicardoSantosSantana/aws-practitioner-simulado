import { createContext,  useState, useMemo, useEffect } from 'react'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
 
export const ContextSimulacao = createContext({})
 

export const AwsSimulacao = ({ children }) => {
 
    const [acertos,setAcertos] = useState(0)
    const [erros,setErros] = useState(0)
    const [mode, setMode] =  useState('dark');
 
    useEffect(() => { 
      
       if(localStorage.getItem('USER_THEME')){
        const USER_THEME = localStorage.getItem('USER_THEME')        
        setMode(USER_THEME); 
       }else{
        localStorage.setItem('USER_THEME', 'light' )
        setMode('light' ); 
       }
       
    }, []);


    const theme = useMemo( () => createTheme( { palette: { mode, } } ), [mode]);
    const valor = { acertos, setAcertos, erros, setErros, mode, setMode, theme  }

    return (
        <ContextSimulacao.Provider theme={ theme } value={valor}>
            {children}
        </ContextSimulacao.Provider>
    )
}