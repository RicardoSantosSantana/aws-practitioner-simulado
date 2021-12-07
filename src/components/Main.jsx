import Header from "./Header"

export function Nav({children}){
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
            <div className="d-flex  border border border-1 rounded ">
                <div className="p-2 bg-transparent text-light">Total Perguntas - <strong>{length}</strong></div>
                <div className="p-2 bg-info  ">Acertos - <strong>{successes}</strong></div>                
                <div className="p-2 bg-warning  text-dark">Erros - <strong>{errors}</strong> </div>            
            </div>     
        )    
    }
    