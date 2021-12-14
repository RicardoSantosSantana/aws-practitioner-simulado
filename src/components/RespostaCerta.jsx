import * as React from 'react';
import { Typography } from "@mui/material";

export default function RespostaCerta( {show,resposta} = props) {

  const resultado =  (
  <>
            <Typography variant="h6" sx={{
              
              borderRadius:2,
              mt:2,
              mb:2,
              p:2,
              color:'white',
              backgroundColor:'#11c511d1'
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