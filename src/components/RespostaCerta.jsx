import * as React from 'react';
import { Typography } from "@mui/material";

export default function RespostaCerta( {show,resposta} = props) {

  const resultado =  (
  <>
            <Typography variant="h6" sx={{
              backgroundColor:'green',
              m:2,
              p:2,color:'white'

            }}> 
             Parabéns, você acertou!! <br/>
             <Typography variant="p"> 
              {resposta}      
            </Typography> 
             
            </Typography> 
            
            
    </>        
)
  
  return  show == "certo" ? resultado : ''
}