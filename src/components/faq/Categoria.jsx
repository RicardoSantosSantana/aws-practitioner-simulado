import classFaq from "../../model/classFaq.ts";
import Pergunta from "./Pergunta";

export default function Categoria(){

 const pergfaq = new classFaq();

const conteudo = ()=>{
  
  return  pergfaq.categorias.map((nomeCategoria,index)=>{
    
    const dataBSTarget = "#categoria_ariaControls_" + index 
    const ariaControls = "categoria_ariaControls_" + index 
    const ariaLabelledby=  "categoria_fariaLabelledby_" + index 
    const dataBSparent = "categoria_"+index;
  
      return (
        <div className="accordion accordion-flush" id={dataBSparent} key={dataBSparent}>
        <div className="accordion-item ">
        <h2 className="accordion-header" id={ariaLabelledby} >
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={dataBSTarget} aria-expanded="false" aria-controls={ariaControls}>
            {nomeCategoria}
          </button>
        </h2>
        <Pergunta ariaControls={ariaControls} chave={"pergunta_"+dataBSparent} dataBSparent={dataBSparent} ariaLabelledby={ariaLabelledby} categoria={nomeCategoria}></Pergunta> 
      </div>                           
      </div>    
      )
  })
}
  
 
 
  return conteudo()

}