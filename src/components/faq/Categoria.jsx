import classFaq from "../../model/classFaq.ts";
import Pergunta from "./Pergunta";
import Typography from '@mui/material/Typography';

export default function Categoria({categoria}=props){
 

    const pergfaq = new classFaq();
    const panelName = "categoria";
    const totalPerguntas = pergfaq.filtrarCategoria(categoria).length;

    const conteudo = (
          <>
          <Typography variant="h5" sx={{mt:2,mb:2}}>
            {categoria}
          </Typography>
          
          <Pergunta key={panelName+"0"} categoria={categoria}></Pergunta> 
        </>
    )
   
 return  categoria!=""?  conteudo : ''
 

}