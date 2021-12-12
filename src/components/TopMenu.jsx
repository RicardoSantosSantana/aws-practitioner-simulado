import  Link from '@mui/material/Link';

const pages = ['Exercícios', 'FAQ'];
const settings = [];

export default function TopMenu(){

  return (
   
      <>
      
              <Link sx={{fontSize:30}} href="/">Perguntas</Link> &nbsp;
              <Link sx={{fontSize:30}} href="/perguntasFrequentes">FAQ</Link>    
        </> 
      
  );
};

