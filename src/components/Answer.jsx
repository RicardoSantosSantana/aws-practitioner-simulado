import RespostaCerta from '../components/RespostaCerta'
import RespostaErrada from '../components/RespostaErrada'

 export default function Answer( props ){
    const textToHTML = str => <span dangerouslySetInnerHTML={{__html: str}}/> 
                   
    const answer = props.answer;
    const resposta = props.data.resposta;
  
    if(!answer) return ""
     
    const success = <RespostaCerta resposta = {textToHTML(resposta)} />
    const fail = <RespostaErrada resposta = {textToHTML(resposta)} />                
            
    return ( answer.right_answer ? success : fail        
    )
    
}