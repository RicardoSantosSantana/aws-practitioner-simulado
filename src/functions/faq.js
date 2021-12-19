export const faqFunctions = {
    dados:[],
    categorias: function() {
        const cat = new Set();
        return Array.from(this.dados.reduce((_,el)=> cat.add(el.categoria) ,[]));        
    },    
    filtrarCategoria:function(categoria){
           return this.dados.filter( el => el.categoria == categoria )            
    },
    filtrarCategoriaPergunta:function(categoria,pergunta){
        return this.dados.filter( el => el.categoria == categoria && el.pergunta == pergunta )        
    }       
} 
