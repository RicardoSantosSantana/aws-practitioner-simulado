 
import Questions from '../components/Question';
  
export default function Simulado({data}=props){
     
    const simulado =  data.map((el)=>{
        return <Questions data={el} key={el.id}></Questions>  
    });

    return (
        <div style="border:1px solid red" className="border p-2  border border-1 rounded">    
            {simulado}
        </div>

    )
    
}