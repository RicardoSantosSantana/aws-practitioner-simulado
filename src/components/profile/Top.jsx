import Image from 'next/image' 
import Link from '@mui/material/Link';
 
export default function Top(){
        
    const myLoader = ({ src, width, quality }) => {      
        return `https://aws.ricardo.dev.br/ricardo-santana.png?w=${width}&q=${quality || 100}`      
      }
      
    return (
    <>
        <Link underline="none" target="__blank" href="https://www.linkedin.com/in/ricardo-santos-santana/" >
        
            <Image
            loader={myLoader} 
            src="https://aws-practitioner-simulado.vercel.app./ricardo-santana.png"
            alt="Picture of the author"
            width="350px"
            height="120px"
            />
         </Link>
        <p>
        <Link underline="none" target="__blank" href="https://github.com/RicardoSantosSantana/aws-practitioner-simulado" >
            Repositório GIT
        </Link>
        </p>
    </>

    )

}