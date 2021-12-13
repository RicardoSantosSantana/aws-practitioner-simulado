 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import RespostaCerta from './RespostaCerta';
import RespostaErrada from './RespostaErrada';
import { ContextSimulacao } from "../context";
import React, { useContext, useState, useEffect } from "react";
import Container from '@mui/material/Container';

export default function ItensResposta( { data, idresposta } = props ) {

  const { acertos,setAcertos, erros, setErros } = useContext(ContextSimulacao);

  const [respostaSelecionada, setRespostaSelecionada] = useState('');
  const [mostrarResposta, setMostrarResposta] = useState('');
  const [radioDisabled, setRadioDisabled] = useState();
  
  useEffect(()=>{

  },[mostrarResposta,respostaSelecionada])
  
  const handleChange = (e) => { 
    setRespostaSelecionada(e.target.value);
  };

 const respostaCorreta = ()=>{
    const retorno = data.filter((el)=>{ 
        const valor = Object.values(el)[0];             
        return valor==true 
    })[0]
    const opcao = Object.keys(retorno); 
    const resposta = Object.values(retorno);

    return {"opcao":opcao,"resposta":resposta }
 }

  const btnConfirmar = (e)=>{
    
        const resposta = respostaCorreta();
    
        if(resposta.opcao[0]==respostaSelecionada && resposta.resposta[0] == true){
          setRadioDisabled(true)
          setMostrarResposta("certo")
          setAcertos(acertos+1)      
        }
        else if(respostaSelecionada=='') {
          setMostrarResposta('')
        }
        else{
          setRadioDisabled(true)
          setMostrarResposta("errado") 
          setErros(erros+1)     
        }
   }
  const options = data.map((el,index)=>{

    const item_pergunta = Object.keys(el)[0];
    const valor = Object.values(el)[0];  

  
      const textToHTML = str => <span  className="text-justify" dangerouslySetInnerHTML={{__html: str}}></span>
    // implementation
   
    if(valor=="true"){
        return <FormControlLabel key={"frmcontrol_"+index} value="true"   control={<Radio />} label={item_pergunta} />
    }
    else{
      return <FormControlLabel key={"frmcontrol_"+index} value={item_pergunta}  control={<Radio />} label={item_pergunta} />
    }
      
  }) 

 
  return (
    <Container>
        <FormControl key= {"itensREspostdda_"+idresposta} disabled={radioDisabled} sx={{ width:'100%' }} component="fieldset" >     
          <RespostaCerta  resposta ={respostaCorreta().opcao[0]}  show={mostrarResposta}  ></RespostaCerta> 
          <RespostaErrada resposta ={respostaCorreta().opcao[0]}   show = {mostrarResposta}></RespostaErrada>     
          <RadioGroup   disabled={radioDisabled} value={respostaSelecionada} onChange={handleChange}>        
            {options}            
          </RadioGroup>
        </FormControl>     
        {mostrarResposta==''? <Button  className="MuiLink-button" sx={{mt:2}}  variant="contained" component="span" 
        onClick={btnConfirmar} > Confirmar</Button>:'' }
    </Container>
  );
}
