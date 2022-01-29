import Bar from "../components/nav/Bar"
import Exercicio from "../components/exercicio"
import LikeDislike from "../components/exercicio/LikeDislike"
import { ContextSimulacao } from "../context/Index";
import React, { useContext, useEffect } from "react";
import axios from 'axios';

Home.getInitialProps = async()=> {
    //teste
    //const response = await axios.get('https://aws-api-theta.vercel.app/api/exercicio')
    const response = await axios.get(`${process.env.API_URL}/exercicios`)    
    return {     
        dados: response.data         
    }
} 
  
export default function Home( { dados }){ 
    const {  theme, mode, setMode, dadosJson, setDadosJson } = useContext(ContextSimulacao);
    
    useEffect(()=>{
        setDadosJson(dados)
    }) 
    return ( 
        <Bar show="true" theme={ theme }  mode={ mode } setMode = { setMode } titleRight={<LikeDislike theme={ theme }/> } titleLeft="Exercícios"> 
            <Exercicio theme={ theme }/> 
        </Bar> 
    )
}