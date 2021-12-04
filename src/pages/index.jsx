import { Simulado } from "../components/Simulado";
import Head from "next/head";
import  Perguntas  from '../model/perguntas.ts';
 
export function getServerSideProps(){

    const pergunta = new Perguntas();
    pergunta.quantidadePerguntas =8; 
       
    return {
        props: { 
            data: pergunta.perguntasRamdomizadas
        }
    }
}

export default function Home(props) {
  
    return (
        <>        
        <Simulado data={props.data}></Simulado>        
        </>
    )
}


