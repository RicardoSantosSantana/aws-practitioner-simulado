import Image from 'next/image'
import { Typography } from "@mui/material";
import { faqFunctions } from '../../functions/faq'

export default function Resposta( { categoria, pergunta } = props ){
 
    
    const textToHTML = str => <span  className="text-justify" dangerouslySetInnerHTML={{__html: str}}></span>
    
    const retorno = faqFunctions.filtrarCategoriaPergunta(categoria,pergunta).map(resp=>{
        
        return resp.resposta.map((el,index)=>{
            if(el.text){
                const pathImage = `/images/${el.image}`
                return (             
                    <Typography  sx={{m:1,p:1}} key={el+"_"+index}>
                        { textToHTML(el.text) }
                         <Image width={1920}   height={1080}   src={pathImage} alt={el.text}></Image>
                 </Typography>      
                 )
            }
            else{
                return (
                    <Typography key={el+"_"+index} sx={{m:1,p:1}}>
                            { textToHTML(el) }
                    </Typography>      
                )
                
                
            }
        })
        
    });

    return <div style={{margin:0,padding:1 }} >{ retorno} </div>
   
   return "ola"
}