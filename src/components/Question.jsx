import ItensAnswer from "./ItensAnswer"
import Answer from "./Answer"
import React, { useContext, useState } from "react";

import { ContextSimulacao } from "../context";

export default function Questions(props){
 
  const { acertos,setAcertos, erros, setErros } = useContext(ContextSimulacao);
 
    const { pergunta , id} = props.data   
    const chave = `${id}_radio`;   
    const [ answered, setAnswered ] = useState();
    const btnAnswer =()=> {
        if(!answered) return  <button onClick={verifyAnswer} className="btn btn-primary">Confirmar Resposta</button>
    }

    function verifyAnswer(e){     
        
        const rbs = document.querySelectorAll(`input[name="${chave}"]`);     
     
        for (const rb of rbs) {
                if(rb.checked) {                    
                    
                    if(rb.getAttribute('right_answer')=="true"){
                        setAcertos(acertos +1)                
                        setAnswered({ "right_answer":true,"id":rb.getAttribute('id') });
                        break;
                    } else {                  
                        setErros(erros +1)      
                        setAnswered({ "right_answer":false,"id":rb.getAttribute('id') });
                        break;
                    }
                }              
        }
        e.stopPropagation();

    }
   
   
 
    return (<>
    <br></br>
        <div className="card" id={chave}>
            <div className="card-header">
                <h5 className="card-title">{pergunta}</h5>                   
            </div>
            <div className="card-body">                    
                <ItensAnswer data={props.data}  answer={answered}  className="list-group-item list-group-item-action"></ItensAnswer> 
                <Answer data={props.data} answer={answered}  ></Answer>              
                {btnAnswer()}
                
            </div>
        </div>
        </>
    )
}