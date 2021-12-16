import Perguntas  from '../../model/perguntas'
import Container from '@mui/material/Container';
import Header from "./Header";
import Questions from './Question';

export default function Exercicio() {
  
    const pergunta = new Perguntas();
    pergunta.quantidadePerguntas = pergunta.totQuestion;
    const data = pergunta.perguntasRamdomizadas;


    const simulado = 
          data.map((el)=>{              
            return <Questions  key={"question_"+el.id} data={el}></Questions>  
        });    

    return (
            <Container >                          
                <Header></Header>                   
                {simulado}
            </Container>         
        ) 
}