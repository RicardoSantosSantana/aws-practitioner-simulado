import * as React from 'react';
import { Typography } from "@mui/material";

export default function RespostaErrada( {show,resposta} = props) {

  const resultado =  (
  <>
            <Typography variant="h6" sx={{
              backgroundColor:'orange',
              m:2,
              p:2,color:'white'

            }}> 
             Não foi dessa vez <br/>
             <Typography variant="p"> 
              {resposta}      
            </Typography> 

             
            </Typography> 
            
            
    </>        
)
  
   
 
  return  show == "errado" ? resultado : ''
}