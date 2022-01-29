import Image from 'next/image'
import absoluteUrl from 'next-absolute-url'
import Link from '@mui/material/Link';

export default function Top(){
  
    const { origin } = absoluteUrl()
       
    const myLoader = ({ src, width, quality }) => {
        return `${origin}${src}?w=${width}&q=${quality || 100}`
      }
    return (
    <>
        <Link underline="none" target="__blank" href="https://www.linkedin.com/in/ricardo-santos-santana/" >
        
            <Image
            loader={myLoader} 
            src="./ricardo-santana.png"
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