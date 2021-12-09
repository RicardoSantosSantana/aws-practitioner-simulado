import Header from "./Header"
import Link from 'next/link'

export function Nav({children}=props){
    return (<>
        <div className="container ">
            <nav className="navbar  navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <h4>Estudo AWS Practitioner</h4>                     
                        </div> 
                    {children}                    
                </div> 
            </nav>  
        </div>
        <Header></Header>       
        </>
    )
}

export function Results( { errors, successes, length } = props ){

    return (
            <div className="d-flex  border border border-0  ">
                <div className="p-2 bg-warning text-dark rounded"> 
                <Link href="/perguntasFrequentes"><a>FAQ</a></Link>
                </div>      
                <div className="p-2 bg-transparent text-light">Total - <strong>{length}</strong></div>
                <div className="p-2 bg-transparent text-light ">Acertos - <strong>{successes}</strong></div>                
                <div className="p-2 bg-transparent text-light">Erros - <strong>{errors}</strong> </div>   
                    
            </div>     
        )    
}
export function MenuFaq(){

    return (
            <div className="d-flex  border border border-1 rounded ">
                <div className="p-2 bg-transparent text-light"> <Link href="/"><a>Voltar - Questionários</a></Link></div>                     
            </div>     
        )    
}
    