import './rodape.css';
import { Link } from 'react-router-dom';

function Rodape() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h3>About Us</h3>
                </div>
                <div className="footer-column">
                    <h3>
                        <Link to="/">Home</Link>
                    </h3>
                </div>
                <div className="footer-column">
                    <h3>Cadastro Paciente</h3>
                    <Link to="/pacientecadastro">Cadastrar Paciente</Link>
                    <button>Sign Up</button>
                </div>
                <div className="footer-column">
                    <h3>Cadastro Psicologo</h3>
                    <Link to="/psicologocadastro">Cadastrar Psicologo</Link>
                    <button>Sign Up</button>
                </div>
                <div className="footer-column">
                    <h3>Login</h3>
                    <Link to="/login">Login</Link>
                    <p>Welcome back!</p>
                </div>
            </div>
        </footer>
    );
}

export default Rodape;
