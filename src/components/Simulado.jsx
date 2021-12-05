 
import Questions from '../components/Question';
  
export default function Simulado({data}=props){
     
    const simulado =  data.map((el)=>{
        return <Questions data={el} key={el.id}></Questions>  
    });

    return simulado
}