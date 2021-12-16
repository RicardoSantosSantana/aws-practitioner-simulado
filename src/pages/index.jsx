import Bar from "../components/nav/Bar"
import Exercicio from "../components/exercicio"
import LikeDislike from "../components/exercicio/LikeDislike"

export default function  index(){
  return <Bar show="true" titleRight={<LikeDislike/> } titleLeft="Exercícios"> <Exercicio /> </Bar>
}

