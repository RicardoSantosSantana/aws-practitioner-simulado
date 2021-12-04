import questionJson from '../data/question-pt.json'

export default class Perguntas{
    #pergunta
    #opcoes
    #resposta
    private _quantidade_perguntas:Number = 1;

    set quantidadePerguntas(qtd:Number){
        this._quantidade_perguntas = qtd;        
    }

    get listaPerguntas():any{
        return questionJson 
    }    
    get randomizeQuestions():Array<any> {
        return this.fakeArrayQuestions.sort(() => Math.random() - 0.5);
    }
    
     get totQuestion(){
        return this.listaPerguntas.length;
    }
    get fakeArrayQuestions():any {        
        return Array.from(Array(this.totQuestion).keys())
    } 
    get perguntasRamdomizadas():any{
        const dados =  this.randomizeQuestions.map(el=>this.listaPerguntas[el])
        return this.filtro(dados);
    }

    filtro(dados){
        return dados.filter((el,index)=>index<this._quantidade_perguntas);
    }
    
    
     
}
