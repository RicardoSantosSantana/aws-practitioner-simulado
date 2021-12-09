 
import Content from "../components/faq/Content";

import { MenuFaq, Nav } from "../components/Main";

export default function perguntasFrequentes(){


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