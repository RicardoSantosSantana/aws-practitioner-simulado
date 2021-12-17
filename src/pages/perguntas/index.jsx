import Content from "../../components/faq/Content";
import Header from "../../components/faq/Header"
import Bar from "../../components/nav/Bar";
import LikeDislike from "../../components/exercicio/LikeDislike";
import Container from '@mui/material/Container'; 
import { ContextSimulacao } from '../../context/Index';
import { useContext } from "react";
 
export default function  GAFC(){
    const { theme, mode, setMode } = useContext(ContextSimulacao);
    
    return (<>
        
        <Bar theme={ theme }  mode={ mode } setMode = { setMode } titleRight={<LikeDislike   show="false" theme={ theme }/> } titleLeft="Perguntas">
             
            <Container>
               <Header showResumo="false" theme={ theme }></Header> 
                <Content key="content"  theme={ theme } />       
             </Container>      
        </Bar>
        </>       
      
    )
}