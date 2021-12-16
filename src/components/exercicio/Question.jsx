import ItensResposta from './ItensResposta';
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';

export default function Questions( { data: { id,opcoes, pergunta } } = props){
    return (
      <Container key={"itensp_"+id}  sx={{borderRadius:2, border:1,borderColor:'#dcdcdc',p:0,m:0,mb:1,pb:2 }}>         
         <Typography variant="h6" sx={{m:2}}> 
                {id} - <span dangerouslySetInnerHTML={{__html: pergunta}} /> 
         </Typography>
        <ItensResposta key={"itenTP_"+id}  idresposta = {id} data={opcoes}></ItensResposta>    
      </Container>
    )
}