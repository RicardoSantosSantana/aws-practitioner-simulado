import * as React from 'react';
import ItensResposta from './ItensResposta';
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';

export default function Questions( {theme, data: { id,opcoes, pergunta } } = props){
 
    return (
      <Container theme={theme}  key={"itensp_"+id}    sx={{ 
                    bgcolor: 'background.default',
                    color: 'text.primary',borderRadius:2, border:1,borderColor:'#dcdcdc',p:0,m:0,mb:1,pb:2 }}>         
      
         <Typography  theme={theme} color="inherit"   variant="h6" sx={{m:2}}> 
                {id} - <span dangerouslySetInnerHTML={{__html: pergunta}} /> 
         </Typography>
        <ItensResposta theme={theme}  key={"itenTP_"+id}  idresposta = {id} data={opcoes}></ItensResposta>    
      </Container>
    )
}