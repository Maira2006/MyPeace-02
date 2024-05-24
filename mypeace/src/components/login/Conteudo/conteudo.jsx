import './conteudo.css'

import fotocadastro from '../Conteudo/fotocadastro.png';
import emailIcon from '../Conteudo/email_icon.png';
import passowdIcon from '../Conteudo/password_icon.png';

function Conteudo() {
    return (
        <>
            <div className="login-container">
                    <img src={fotocadastro} alt="" className="user"/> 
                    <form action="#" method="post" >
                        <div className="input-group">
                        <img src={emailIcon} alt="Email Icon" /> 
                            <input type="email" name="email" placeholder="Email" required />
                        </div>
                    
                
                        <div class="input-group">
                        <img src={passowdIcon}alt="Password Icon"/>
                            <input type="password" name="password" placeholder="*****" required/>
                        </div>

                        <nav className="forgot"><a href=""><p>Forgot password?</p></a></nav>
                        <button type="submit" className="btn">Login</button>
                    </form>
            </div>

        </>
    )
}
export default Conteudo