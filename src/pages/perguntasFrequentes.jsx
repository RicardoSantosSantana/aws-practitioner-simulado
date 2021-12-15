import Content from "../components/faq/Content";
import Header from "../components/Header"
import Dashboard from "../components/dashboard/Dashboard";

export default function perguntasFrequentes(){
    return (      
        <Dashboard>          
            <Header showResumo="false"></Header>  
            <Content key="content" />                
        </Dashboard>
    )
}