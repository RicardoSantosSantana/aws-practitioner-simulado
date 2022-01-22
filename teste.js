function Perfil(perfil){

    if(perfil=='admin'){
        return  'Você é um administrador'
    } else if (perfil=='user') {
        return 'Você é um Usuário'
    } else if(perfil=='financial') {
        return 'Você é do Financeiro'
    } else if(perfil=='comercial') {
        return 'Você é do Comercial'
    } else if(perfil=='ti') {
        return 'Você é da Tecnologia'
    } else {
        return 'Você não é de nenhum departamento!!'
    }
}
function Perfil2(perfil){
    switch(perfil){
        case 'admin':
            return  'Você é um administrador'
            break;
        case 'user':
            return 'Você é um Usuário'
            break;
        case 'financial':
            return 'Você é do Financeiro'
            break
        case 'comercial':
            return 'Você é do Comercial'
            break;
        case 'ti':
            return 'Você é da Tecnologia'
            break;
        default:
            return 'Você não é de nenhum departamento!!'
            break
    }
}

const Perfil3 = (perfil) => {
    const type = {
        'admin':'Você é um administrador',
        'user':'Você é um Usuário',
        'financial':'Você é do Financeiro',
        'comercial': 'Você é do Comercial',
        'ti':'Você é da Tecnologia'
    }
    return type[perfil] ?? 'Você não é de nenhum departamento!!'
}

//console.log(Perfil3('ti'))
//console.log(Perfil3('admin'))



const dados = [
    { 'aluno':'Mirian B. Santana'},
    { 'aluno':'Ricardo Santos Santana'},
    { 'aluno':'Docinho Boazinha Santana'},
    { 'aluno':'Fomando na Unip'},
    ]
function* idMaker(){
    var index = 0;
    
     while(index<=dados.length-1)
        yield dados[index++];
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next()); // 0
console.log(gen.next()); // 1
console.log(gen.next()); // 2
console.log(gen.next()); // 2
console.log(gen.next()); // 2

 


  const nomeDepartamento = [
        {name : 'ti', result : 'Você é do Departamento de Tecnológia'},
        {name: 'rh', result : 'Você é do Departamento de Recursos Humanos'},
        {name: 'financeiro', result : 'Você é do Departamento Financeiro'},
        {name: 'comercial', result: 'Você é do Departamento Comercial'},
        {name: '', result: 'Você não é de nenhum departamento!!'}
    ]
    const perfil = (tipoPerfil) => nomeDepartamento.find(el => el.name == tipoPerfil)
    const resultado = perfil('rh').result
    
    console.log(resultado)
 
    const da = [1,1,1,3,4,5,6,1,2,3,5,9,0,1,3,0,3,4,5,6,1,2,4,5,0]
    const f = new Set(da).size 
    console.log(f);
    