import ItensResposta from './ItensResposta';
import React, { useState } from "react";
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import BarraDivisor from "./BarraDivisor";
export default function Questions(props){
  
    const { pergunta , id} = props.data   
      
    const textToHTML = str => <span dangerouslySetInnerHTML={{__html: str}}/> 
 
    return (
      <Container key={"itensp_"+id} >         
         <Typography variant="h6" sx={{m:2}}>
               {id} - {textToHTML(pergunta)}
         </Typography>
                            
        <ItensResposta key={"itenTP_"+id}  idresposta = {id} data={props.data.opcoes}></ItensResposta>
        <BarraDivisor/>
      </Container>
    )
}