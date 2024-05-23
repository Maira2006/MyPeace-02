import './Cabecalho.css';
import { Link } from 'react-router-dom';

function Cabecalho() {
    return (
        <header>
            <div>
                <img src="Logo.png" alt="" className='my' /> 
                <h1>MyPeace</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/psicologocadastro">Cadastrar</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Cabecalho;
