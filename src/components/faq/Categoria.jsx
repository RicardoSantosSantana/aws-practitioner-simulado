import Pergunta from "./Pergunta";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { faqFunctions } from "../../functions/faq";

export default function Categoria( { theme, categoria, dados }=props){
   
    const panelName = "categoria";    
    faqFunctions.dados = dados;

    const totalPerguntas = faqFunctions.filtrarCategoria(categoria).length;

    const conteudo = (
          <>
          <Divider theme={theme} sx={{ color:'black'}} flexItem> 
          <Typography theme={theme} variant="h5" sx={{ color:'#dcdcdc', mt:4,mb:4}}>
          ~ {categoria} ~ 
          </Typography>
          </Divider>
          
          <Pergunta theme={theme} key={panelName+"0"} categoria={categoria}></Pergunta> 
        </>
    )
   
 return  categoria!=""?  conteudo : ''
 

}