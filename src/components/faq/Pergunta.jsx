import Resposta from "./Resposta";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { faqFunctions } from '../../functions/faq'
 
export default function Pergunta( { theme, chave, categoria } = props ){
  
  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));
 
 const retorno =()=> {
      return faqFunctions.filtrarCategoria(categoria).map((el,index)=>{
        return ( 
              <Root key={ "resposta_"+ chave+index } sx={{  border:1, borderColor:'#dcdcdc',borderRadius:2, p:2,m:0,mb:2 }}>
                <Typography  theme={ theme }  sx={{
                  
                  borderTopLeftRadius:22,
                  borderTopRightRadius:2,
                  borderBottomRightRadius:22,
                  borderBottomLeftRadius:2,
                  bgcolor: '#dcdcdc',  
                  color: 'black' , 
                  fontSize:20,p:1,m:0,pl:2 }}  >
                {index+1} - {el.pergunta}                  
                </Typography>    
                <Resposta categoria={categoria} pergunta={el.pergunta}></Resposta>      
              </Root>
        )}
      )}   
 
  return  retorno()
  
}