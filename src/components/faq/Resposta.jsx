import classFaq from "../../model/classFaq.ts";
import Image from 'next/image'
import { Typography } from "@mui/material";


export default function Resposta( { categoria, pergunta } = props ){
 
    const pergfaq = new classFaq();
    const textToHTML = str => <span  className="text-justify" dangerouslySetInnerHTML={{__html: str}}></span>
    
    const retorno = pergfaq.filtrarCategoriaPergunta(categoria,pergunta).map(resp=>{
        
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
}