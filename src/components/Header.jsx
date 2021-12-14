import Typography from '@mui/material/Typography';

export default function Header(props){
    return (
        <>
        <Typography  sx={{ mt:4 }} variant="h4">
            Perguntas para estudo AWS Practitioner                  
        </Typography>
        <Typography sx={{ mt:4, mb:4 }}>
          Essa página deve ajudar a estudar para a certificação, porém não deve ser usada como única fonte de estudo, 
          sugiro fazer um curso em alguma plataforma de estudos, como Udemy ou mesmo a própria Amazon. Lembre-se isso não é um simulado, é apenas algumas perguntas para estudo.
        </Typography>
  
    </>
    )
}