import styles from '../styles/Home.module.css'
import { spaceTounderscore } from '../functions/utils.js'

export default function ItensAnswer( props ){
 
    const id_answer = props.data.id;
    const answer = props.data.answer;
 console.log(props);

    const make_answer = (el,idx) => {
     
         
        const answer_item_value = Object.keys(el);
        const answer_item_key = Object.values(el);  
        const key_card_text = `${id_answer}_card_text_${idx}`;
        const key_radio = `${id_answer}_radio_${idx}`;
        const id_name_radio = `${id_answer}_radio`;

        const retorno_undefined = (
            <p className="card-text" key={key_card_text} >
                <input type="radio" right_answer={ answer_item_key } name={id_name_radio} id={key_radio}/>
                &nbsp;<label htmlFor={key_radio} > {answer_item_value} </label>                        
            </p>
        )

        const selected = (
            <p className="card-text" key={key_card_text} > 
                <strong>&nbsp;você selecionou &darr;</strong> <br/>
                &nbsp;<label htmlFor={key_radio} > <i>{answer_item_value}</i> </label>                        
            </p>
        ) 
        const no_selected = (
            <p className="card-text" key={key_card_text} >            
                &nbsp;<label htmlFor={key_radio} > {answer_item_value} </label>                        
            </p>
        ) 
        console.group(key_radio)
      
            console.log('key_radio = ',key_radio)
            console.log('answer.length = ',answer)
            console.log('answer = ',answer)
            console.groupEnd();
    
        if(props.data.answer){ 
            console.log('ENTGROU AQUI')
            const with_answer = props.data.answer.id == key_radio ? selected:  no_selected
            return with_answer
        }
        else{
            console.log('ENTGROU nao entrou')
            return retorno_undefined
        }
        

        
        
    }

  
     return props.data.opcoes.map(make_answer)  
   
}