import classFaq from "../../model/classFaq.ts";
import Resposta from "./Resposta";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
export default function Pergunta( { chave, categoria } = props ){
  
  const pergfaq = new classFaq();

  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));
 
 const retorno =()=> {
      return pergfaq.filtrarCategoria(categoria).map((el,index)=>{
        return ( 
              <Root  key={ "resposta_"+ chave+index } sx={{borderRadius:2, border:1,borderColor:'#dcdcdc',p:0,m:0,mb:1 }}>        
                <Typography  sx={{borderTopRightRadius:2, borderTopLeftRadius:2   ,backgroundColor:'#dcdcdc',color:'black',fontSize:23,p:1,m:0,pl:2 }}   >            
                {index+1} - {el.pergunta}                  
                </Typography>    
                <Resposta categoria={categoria} pergunta={el.pergunta}></Resposta>      
              </Root>
        )}
      )}   
 
  return  retorno()
  
}