import Bar from "../components/nav/Bar"
import Exercicio from "../components/exercicio"
import LikeDislike from "../components/exercicio/LikeDislike"
import axios from 'axios';

import { ContextSimulacao } from '../context/Index';
import { useContext } from "react";



export default function  Home(){

//header:{"Access-Control-Allow-Origin":"*",  "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"},        
    
axios({        
        method: 'get',
        url: 'https://aws-api-theta.vercel.app/api/exercicio',
        responseType: 'json'
      })
        .then(function (response) {
          console.log(response)
        });

    const { theme, mode, setMode } = useContext(ContextSimulacao);

 return ( 
        <Bar show="true" theme={ theme }  mode={ mode } setMode = { setMode } titleRight={<LikeDislike theme={ theme }/> } titleLeft="Exercícios"> 
            <Exercicio  theme={ theme }/> 
        </Bar> )

}

