import questionJson from '../data/question-pt.json'

export default class Perguntas{
    #pergunta
    #opcoes
    #resposta
    
    static totAcertos:any;
    private _dados:any;

    private _quantidade_perguntas:Number = 1;
    
    constructor(){
        this._dados = questionJson 
    }
    set quantidadePerguntas(qtd:Number){
        this._quantidade_perguntas = qtd;        
    }

     get listaPerguntas():any{        
        return this._dados
    }    
  
    get totQuestion(){
        return this.listaPerguntas.length;
    }
    
    get perguntasRamdomizadas():any{  
      // this.filtro()                      
        this.adcionarID();
        return this._dados;
    }
    
    filtro(){
        this._dados = this._dados.filter((el,index)=>index<this._quantidade_perguntas).sort(() => Math.random() - 0.5);;
    }
    
    adcionarID(){
        const addID = (prev,atual,idx)=>{
            prev.push( { 'id':idx+1, ...atual } ) 
            return prev
       }

       this._dados =  this._dados.reduce(addID,[] )
      
    }
  
     
}
