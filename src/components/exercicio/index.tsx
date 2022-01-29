import Container from '@mui/material/Container';
import Top from "../../components/profile/Top";

import Header from "./Header";
import Questions from './Question';
import { useContext } from 'react'
import { ContextSimulacao } from '../../context/Index'
import { exercicioFunction } from '../../functions/exercicio'

export default function Exercicio() {
      
    const contexto =  useContext(ContextSimulacao);
    const theme  = contexto['theme'];
    const dadosJson  = contexto['dadosJson'];
    
    if (dadosJson) {

        exercicioFunction.dados = dadosJson;
    
        exercicioFunction.quantidadePerguntas(exercicioFunction.totQuestion());
        const data = exercicioFunction.perguntasRamdomizadas();
     
        const simulado = 
            data.map((el)=>{              
            return <Questions   theme={ theme } key={"question_"+el.id} data={el}></Questions>  
        });            

        return ( 
            <Container> 
                <Top></Top>
                <Header theme={ theme } ></Header>                   
                {simulado ?? ''}
            </Container>
        )    

    }
    else {
        return ( 
            <Container> 
                <Header theme={ theme } ></Header>         
            </Container>
        )
    }
 

            
            
 
}