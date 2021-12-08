import  Simulado  from "../components/Simulado";
import { ContextSimulacao } from "../context";
import React, { useContext } from  "react"
import { Nav, Results } from "../components/Main";
import  Perguntas  from '../model/perguntas.ts';

export function getServerSideProps(){

    const pergunta = new Perguntas();
    pergunta.quantidadePerguntas = pergunta.totQuestion;
    
       
    return {
        props: { 
            data: pergunta.perguntasRamdomizadas
        }
    }
}


export default function Home(props) {
   
    const { acertos, erros } = useContext(ContextSimulacao); 
    return (        
           <div className="container">  
            
                <Nav><Results errors={erros} successes={acertos} length = {props.data.length} /></Nav>                                                                 
                <Simulado data={props.data}></Simulado>
                 
            </div>        
        
        )
 
}


