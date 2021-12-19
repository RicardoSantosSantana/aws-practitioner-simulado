export const exercicioFunction = {
   
    dados:[],
    quantidade_perguntas:1,
    quantidadePerguntas:function(qtd){
        this.quantidade_perguntas = qtd;        
    },
    
    totQuestion:function(){
        return  71 ; // this.dados.length;
    },    
    perguntasRamdomizadas:function(){                
        this.adcionarID();
        return this.dados;
    },    
    filtro:function(){
        this.dados = this.dados.filter((el,index)=>index<this.quantidade_perguntas).sort(() => Math.random() - 0.5);
    },    
    adcionarID:function(){
        const addID = (prev,atual,idx)=>{
            prev.push( { 'id':idx+1, ...atual } ) 
            return prev
       }
       this.dados =  this.dados.reduce(addID,[] )      
    } 
     
}
