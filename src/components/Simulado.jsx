import Questions from '../components/Question';
export function Simulado(props){

    const simulado =  props.data.map((el)=>{
        return <Questions data={el} key={el.id}></Questions>  
    });
 
  
  return (
      <div className="container">
         { simulado }
      </div> 
    )

}