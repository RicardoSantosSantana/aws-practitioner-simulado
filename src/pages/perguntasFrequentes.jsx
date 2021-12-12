 
import Content from "../components/faq/Content";

import Header from "../components/Header"
import Container from '@mui/material/Container';
import TopMenu from '../components/TopMenu'

export default function perguntasFrequentes(){


    return (
        <Container >
 
            <TopMenu />
            <Header showResumo="false"></Header>  
            <Content key="content" />               
        </Container>  

    )
}