import Perguntas  from '../../model/perguntas'
import Container from '@mui/material/Container';
import Header from "./Header";
import Questions from './Question';
import { useContext } from 'react'
import { ContextSimulacao } from '../../context/Index'

export default function Exercicio() {
  
    const pergunta = new Perguntas();
    pergunta.quantidadePerguntas = pergunta.totQuestion;
    const data = pergunta.perguntasRamdomizadas;
    const contexto =  useContext(ContextSimulacao);
    const theme  = contexto['theme'];
    
    const simulado = 
          data.map((el)=>{              
            return <Questions   theme={ theme } key={"question_"+el.id} data={el}></Questions>  
        });    

        return ( 
        <Container> 
            <Header theme={ theme } ></Header>                   
            {simulado}
        </Container>
    )

            
            
 
}