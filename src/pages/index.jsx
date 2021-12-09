import  Simulado  from "../components/Simulado";
import { ContextSimulacao } from "../context";
import React, { useContext } from  "react"
import { Nav, Results } from "../components/Main";
import  Perguntas  from '../model/perguntas.ts';


export default function Home() {
    const pergunta = new Perguntas();
    pergunta.quantidadePerguntas = pergunta.totQuestion;
    const data = pergunta.perguntasRamdomizadas;

    const { acertos, erros } = useContext(ContextSimulacao); 
    return (        
           <div className="container">  
            
                <Nav><Results errors={erros} successes={acertos} length = {data.length} /></Nav>                                                                 
                <Simulado data={data}></Simulado>
                 
            </div>        
        
        )
 
}


