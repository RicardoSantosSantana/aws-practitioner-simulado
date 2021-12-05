import  Simulado  from "../components/Simulado";
import { ContextSimulacao } from "../context";
import React, { useContext } from  "react"
import { Nav, Results } from "../components/Main";
import  Perguntas  from '../model/perguntas.ts';
export function getServerSideProps(){

    const pergunta = new Perguntas();
    pergunta.quantidadePerguntas =8; 
       
    return {
        props: { 
            data: pergunta.perguntasRamdomizadas
        }
    }
}


export default function Home(props) {
  console.log(props)
  
    const { acertos, erros } = useContext(ContextSimulacao); 
    return (        
        <main className="container">                            
            <Nav><Results errors={erros} successes={acertos}/></Nav>                                
            <Simulado data={props.data}></Simulado>
        </main>    
        )
 
}


