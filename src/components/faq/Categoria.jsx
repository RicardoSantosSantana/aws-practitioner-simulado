import classFaq from "../../model/classFaq.ts";
import Pergunta from "./Pergunta";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Categoria({categoria}=props){
 

    const pergfaq = new classFaq();
    const panelName = "categoria";
    const totalPerguntas = pergfaq.filtrarCategoria(categoria).length;

    const conteudo = (
          <>
          <Divider sx={{ color:'black'}} flexItem> 
          <Typography variant="h5" sx={{ color:'#dcdcdc', mt:4,mb:4}}>
          ~ {categoria} ~ 
          </Typography>
          </Divider>
          
          <Pergunta key={panelName+"0"} categoria={categoria}></Pergunta> 
        </>
    )
   
 return  categoria!=""?  conteudo : ''
 

}