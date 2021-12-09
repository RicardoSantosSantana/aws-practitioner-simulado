 
import Content from "../components/faq/Content";
 

import { MenuFaq, Nav } from "../components/Main";

 
export default function faq(){




/*
    const teste = data[8];
    
    console.group("PERGUNTA")
    console.log(teste);
    console.groupEnd();
    teste.resposta.map(el=>{
        
        if(el.text){
            console.group("objecto")
            console.log(el.text);
            console.log(el.image)
            console.groupEnd();
        }
        else{
            console.group("texto")
            console.log(el)
            console.groupEnd();
        }

    })
*/
    return (
        <div className="container">  
            <Nav>
               <MenuFaq/>
            </Nav>
               <Content key="conyteny">
                  
               </Content>
        </div>  

    )
}