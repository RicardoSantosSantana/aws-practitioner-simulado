import estilo from '../styles/ItensAnswer.module.css'

export default function ItensAnswer( props ){
    
 

    const textToHTML = str => <span dangerouslySetInnerHTML={{__html: str}}/> 
                   
    const id_answer = props.data.id;
    const answer = props.answer;
    const make_answer = (el,idx) => {     
         
        const answer_item_value = Object.keys(el);
        const answer_item_key = Object.values(el);  
        const key_card_text = `${id_answer}_card_text_${idx}`;
        const key_radio = `${id_answer}_radio_${idx}`;
        const id_name_radio = `${id_answer}_radio`;

        const retorno_undefined = (
 
            <p className="card-text" key={key_card_text}   >
                                
                <label htmlFor={key_radio} className={estilo.cursor} >
                <input type="radio" right_answer={ answer_item_key } name={id_name_radio} id={key_radio}/>
                &nbsp;  { textToHTML(answer_item_value) } </label>
                
            </p>
            
        )

        const selected = (
            <p className="card-text" key={key_card_text} >                 
                &nbsp;<label htmlFor={key_radio} > <strong>{textToHTML(answer_item_value)}</strong> </label>                        
            </p>
        ) 
        const no_selected = (
            <p className="card-text" key={key_card_text} >            
                &nbsp;<label htmlFor={key_radio} style={{
                    color:'#91908F'
                }}> {textToHTML(answer_item_value)} </label>
            </p>
        ) 
      
    
        if(props.answer){             
            const with_answer = props.answer.id == key_radio ? selected:  no_selected
            return with_answer
        }
        else{      
            return retorno_undefined
        }
        
    }
    return props.data.opcoes.map(make_answer)
}