import classFaq from "../../model/classFaq.ts";
import Resposta from "./Resposta";

export default function Pergunta( { chave, dataBSparent, ariaControls, ariaLabelledby, categoria } = props ){
  
  const pergfaq = new classFaq();
   

 const retorno =()=> {
      return pergfaq.filtrarCategoria(categoria).map((el,index)=>{
        return (
            <div id={ariaControls} key={ chave+index } className="accordion-collapse collapse" aria-labelledby={ariaLabelledby} data-bs-parent={dataBSparent}>
                  <div className="card text-dark bg-default mb-3 ">
                      <div className="card-header">
                        <span className=" text-uppercase font-weight-bold">{index+1+' - ' + el.pergunta}</span>
                      </div>
                      <div className="card-body">
                          <div className="card-text">
                          <Resposta key={ "resposta_"+ chave+index }  categoria={categoria} pergunta={el.pergunta}></Resposta>            
                          </div>
                      </div>                      
                  </div>
            </div>
        )}
      )}   
  
  return retorno()
    
  
}