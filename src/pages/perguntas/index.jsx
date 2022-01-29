import Content from "../../components/faq/Content";
import Header from "../../components/faq/Header"
import Bar from "../../components/nav/Bar";
import LikeDislike from "../../components/exercicio/LikeDislike";
import Container from '@mui/material/Container'; 
import { ContextSimulacao } from '../../context/Index';
import { useContext, useEffect } from "react";
import axios from 'axios';
import Top from '../../components/profile/Top';
IndexPerguntas.getInitialProps = async()=> {          
    const response = await axios.get('https://aws-api-theta.vercel.app/api/faq')    
    return { dados: response.data }
}   

export default function  IndexPerguntas( { dados } ){
    const {  theme, mode, setMode, dadosJson, setDadosJson } = useContext(ContextSimulacao);
  
    useEffect(()=>{         
        setDadosJson(dados)
    })
         
    return (<>
        
        <Bar theme={ theme }  mode={ mode } setMode = { setMode } titleRight={<LikeDislike   show="false" theme={ theme }/> } titleLeft="Perguntas">
             
            <Container>
            <Top></Top>
               <Header showResumo="false" theme={ theme }></Header> 
                <Content dados={dados} key="content"  theme={ theme } />
             </Container>      
        </Bar>
        </>       
      
    )
}