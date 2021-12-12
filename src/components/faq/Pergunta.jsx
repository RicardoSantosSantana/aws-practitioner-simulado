import classFaq from "../../model/classFaq.ts";
import Resposta from "./Resposta";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
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
              <Root key={ "resposta_"+ chave+index }>
                <Typography variant="h5" component="strong" >            
                  {el.pergunta}
                  
                </Typography> 
                <Resposta   categoria={categoria} pergunta={el.pergunta}></Resposta>
                <Divider><ArrowLeftOutlinedIcon/><ArrowRightOutlinedIcon/></Divider>
              <br/>              
              </Root>           
                
        )}
      )}   
 
  return  retorno()
  
}