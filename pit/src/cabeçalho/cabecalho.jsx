
import'./cabecalho.css'

function cabecalho(){
    return(
        <>
            <header className="cabecalho_header">
                <div className="nomeapp">
                    <img src="logo.png" alt="Logo"></img>
                    <h1>MyPeace</h1>
                </div>
            </header>    

            <div className='paginas_cabecalho' >

                    <nav>
                        <ul>
                            <li><a href='/'></a>Homes</li>
                            <li><a href='/SignUp'></a>Sign Up</li>
                            <li><a href='/contato'></a>Login</li>
                        </ul>
                    </nav>  
                    
            </div>    

        
        </>
    )
}

export default cabecalho;