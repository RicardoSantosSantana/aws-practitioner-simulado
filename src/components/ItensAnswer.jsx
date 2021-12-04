import styles from '../styles/Home.module.css'
import { spaceTounderscore } from '../functions/utils.js'

export default function ItensAnswer( { answer, pergunta, opcoes } = props ){
 

    const make_answer = (el,index) => {

        const answer_item_value = Object.keys(el);
        const answer_item_key = Object.values(el);        
        const answer_item_name = pergunta;
        const key = answer_item_name+'_'+index;
        
        const retorno_undefined = (
            <p className="card-text" key={answer_item_name+'_'+key} >
                <input type="radio" right_answer={ answer_item_key } name={answer_item_name} id={key}/>
                &nbsp;<label htmlFor={key} > {answer_item_value} </label>                        
            </p>
        )

        const selected = (
            <p className="card-text" key={answer_item_name+'_'+key} > 
                <strong>&nbsp;você selecionou &darr;</strong> <br/>
                &nbsp;<label htmlFor={key} > <i>{answer_item_value}</i> </label>                        
            </p>
        ) 
        const no_selected = (
            <p className="card-text" key={answer_item_name+'_'+key} >            
                &nbsp;<label htmlFor={key} > {answer_item_value} </label>                        
            </p>
        ) 
        const with_answer = answer.id == key ? selected:  no_selected
        
      
       
        return answer.right_answer ==undefined ? retorno_undefined : with_answer  
        
    }

  
    return opcoes.map(make_answer)  
    
}