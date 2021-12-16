import Content from "../../components/faq/Content";
import Header from "../../components/faq/Header"
import Bar from "../../components/nav/Bar";

export default function perguntasFrequentes(){
    return (      
        <Bar titleLeft="Perguntas">          
            <Header showResumo="false"></Header>  
            <Content key="content" />                
        </Bar>
    )
}