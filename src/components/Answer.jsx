import withRouter from "next/dist/client/with-router";

 export default function Answer( props ){
 
    const answer = props.answer;
    const resposta = props.data.resposta;
  
    if(!answer) return ""
     
    const success = (
            <div className="card text-light bg-success mb-3" >
                <div className="card-header">PARABÉNS</div>
                    <div className="card-body">
                        <h5 className="card-title">Resposta Correta</h5>
                        <p className="card-text">{resposta}</p>           
                    </div>
            </div>  
    )
    
    const fail = (
        <div className="card text-dark bg-warning mb-3">
            <div className="card-header">NÃO FOI DESSA VEZ</div>
                <div className="card-body">
                    <h5 className="card-title">Resposta Correta</h5>
                    <p className="card-text">{resposta}</p>           
                </div>
        </div>  
    )
  
    return answer.right_answer ? success : fail 

            
    
}