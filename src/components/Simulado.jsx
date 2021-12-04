import Questions from '../components/Question';
export function Simulado(props){

    const simulado =  props.data.map((el,index)=>{
        return <Questions data={el} key={index}></Questions>  
    });
 
  
  return (
      <div className="container">
         { simulado }
      </div> 
    )

}