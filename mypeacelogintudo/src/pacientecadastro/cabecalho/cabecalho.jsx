
import'./cabecalho.css'
import logo from '../assets/logo.png'

function Cabecalho(){
    return(
        <>
            <header className="cabecalho_header">
                <div className="nomeapp">
                    <img src={logo} alt="Logo"></img>
                    <h1>MyPeace</h1>
                </div>
            </header>    

   

        
        </>
    )
}

export default Cabecalho;