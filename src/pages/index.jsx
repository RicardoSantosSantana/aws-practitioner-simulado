import Bar from "../components/nav/Bar"
import Exercicio from "../components/exercicio"
import LikeDislike from "../components/exercicio/LikeDislike"

import { ContextSimulacao } from '../context/Index';
import { useContext } from "react";
 
export default function  Home(){
    const { theme, mode, setMode } = useContext(ContextSimulacao);

 return ( 
        <Bar show="true" theme={ theme }  mode={ mode } setMode = { setMode } titleRight={<LikeDislike theme={ theme }/> } titleLeft="Exercícios"> 
            <Exercicio  theme={ theme }/> 
        </Bar> )

}

