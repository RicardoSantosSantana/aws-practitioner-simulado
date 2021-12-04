import ItensAnswer from "./ItensAnswer"
import Answer from "./Answer"
import { spaceTounderscore } from '../functions/utils.js'
import { useState } from "react";
 
export default function Questions(props){
 
    const { pergunta , id} = props.data 
  
    const chave = `${id}_radio`;
   
    const [ answered, setAnswered ] = useState();

    
    function verifyAnswer(){     
        const rbs = document.querySelectorAll(`input[name="${chave}"]`);     
     
        for (const rb of rbs) {
                if(rb.checked) {
                    
                    if(rb.getAttribute('right_answer')=="true"){
                        setAnswered({ "right_answer":true,"id":rb.getAttribute('id') });
                        break;
                    } else {                        
                        setAnswered({ "right_answer":false,"id":rb.getAttribute('id') });
                        break;
                    }
                }              
        }

    }
   
     const btnAnswer =()=> {
         
         return  <a href="#" onClick={verifyAnswer} className="btn btn-primary">Confirmar Resposta</a>
     }
 
        return (
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
        )
}