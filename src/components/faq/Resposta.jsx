import classFaq from "../../model/classFaq.ts";

export default function Resposta( { categoria, pergunta } = props ){
 
    const pergfaq = new classFaq();
    const textToHTML = str => <span  className="text-justify" dangerouslySetInnerHTML={{__html: str}}/> 
    const retorno = pergfaq.filtrarCategoriaPergunta(categoria,pergunta).map(resp=>{
        
        return resp.resposta.map((el,index)=>{
            if(el.text){
                const pathImage = `/images/${el.image}`
                return (             
                 <div  key={el.text+"_"+index} className="text-justify"> 
                 <p>{ textToHTML(el.text) }</p>
                 <p> <img src={pathImage}></img></p>
                 </div> 
                 )                 
                
            }
            else{
                return  <div  key={el+"_"+index}  className="text-justify mb-2"> { textToHTML(el) }</div>
            }
        })
        
    });

    return retorno
}