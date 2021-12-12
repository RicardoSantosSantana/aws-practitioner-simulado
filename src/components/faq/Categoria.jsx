import classFaq from "../../model/classFaq.ts";
import Pergunta from "./Pergunta";
import AccordionFaq from "../faq/AccordionFaq"


export default function Categoria(){
 
 const pergfaq = new classFaq();

const conteudo = ()=>{
  
  return  pergfaq.categorias.map((nomeCategoria,index)=>{
 
    const panelName = "categoria_"+index;
    const totalPerguntas = pergfaq.filtrarCategoria(nomeCategoria).length;
 

      return (
        <AccordionFaq key={panelName} totalPerguntas = { totalPerguntas } title={nomeCategoria} name={panelName}>          
              <Pergunta key={panelName+"0"} categoria={nomeCategoria}></Pergunta> 
        </AccordionFaq>
 
          
      )
  })
}
  
 return  conteudo()
 

}