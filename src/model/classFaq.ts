import dadosJSON from '../data/faq.json'

export default class classFaq{
    private  _dados:any;

    constructor(){
        this._dados = dadosJSON
    }
    
    get categorias() {
        const cat = new Set();
        return Array.from(this._dados.reduce((_,el)=> cat.add(el.categoria) ,[]));
    }
    
    filtrarCategoria(categoria){
            return this._dados.filter( el => el.categoria == categoria )    
    } 
    filtrarCategoriaPergunta(categoria,pergunta){
        return this._dados.filter( el => el.categoria == categoria && el.pergunta == pergunta )     
} 
    
    
}