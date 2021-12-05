 export function Nav({children}){
    return (<>
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand">{children}</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"></button> 
                </div>
            </nav>
        </div>
        <div className="bg-light p-5 rounded"></div>   
        </>
    )
}

export function Results( { errors, successes } = props ){

    return (
        
        <div className="container">
            Simulado AWS Practitioner &nbsp;  &nbsp;  &nbsp;
            <button type="button" className="btn btn-primary position-relative">
            Meus Acertos
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {successes}        
                </span>
            </button>
            &nbsp;  &nbsp;  &nbsp;
            <button type="button" className="btn btn-warning position-relative">
            Meus Erros
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {errors}        
                </span>
            </button>
        </div>
     
        )    
    }
    