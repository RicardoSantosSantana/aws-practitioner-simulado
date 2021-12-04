import ItensAnswer from "./ItensAnswer"
import Answer from "./Answer"
import { spaceTounderscore } from '../functions/utils.js'
import { useState } from "react";
 
export default function Questions(props){
 
    const { pergunta, opcoes,resposta} = props.data 
  
    const chave = spaceTounderscore(pergunta);

    const [ answered, setAnswered ] = useState([]);

    
    function verifyAnswer(){     
        const rbs = document.querySelectorAll(`input[name="${chave}"]`);     
     
        for (const rb of rbs) {
                if(rb.checked) {
                    
                    if(rb.getAttribute('right_answer')=="true"){
                        setAnswered({
                                        "right_answer":true,
                                        "id":rb.getAttribute('id')
                                    });
                        break;
                    } else {                        
                        setAnswered(
                            {
                                "right_answer":false,
                                "id":rb.getAttribute('id')
                            }
                        );
                        break;
                    }
                }              
        }

    }
   
     const btnAnswer =()=> {
         
         return answered.right_answer==undefined ? (
         <a href="#" onClick={verifyAnswer} className="btn btn-primary">Confirmar Resposta</a>
         ) : '';
     }
 
        return (
            <div className="card" id={`card_${chave}`}>
                <div className="card-header">
                    <h5 className="card-title">{pergunta}</h5>                   
                </div>
                <div className="card-body">                    
                    <ItensAnswer key={chave}  answer={answered}  className="list-group-item list-group-item-action" pergunta={chave} opcoes={opcoes}></ItensAnswer> 
                    <Answer answer={answered} resposta={resposta}></Answer>
                    {btnAnswer()}
                    
                </div>
            </div>
        )
}