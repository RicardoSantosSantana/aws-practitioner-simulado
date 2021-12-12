import Typography from '@mui/material/Typography';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import React, { useContext } from  "react"

import  Perguntas  from '../model/perguntas.ts';
import { ContextSimulacao } from '../context';


export default function ResumoResultado() {
    const { acertos, erros } = useContext(ContextSimulacao); 
    const pergunta = new Perguntas();  
    const total = pergunta.perguntasRamdomizadas.length;
  
    return (
      <Typography>
        <span style={{padding:5, color:'green'}}><CheckCircleOutlinedIcon/><strong>Acertos</strong> { acertos }</span>
        <span style={{padding:5, color:'orange'}}><ErrorOutlineOutlinedIcon /><strong >Erros</strong> { erros }</span>
        <span><strong style={{padding:5}}>Total</strong>{ total }</span>
      </Typography> 
    );
}