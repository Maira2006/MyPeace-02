import fotocadastro from '../Cadconteudo/fotocadastro.png';
import emailIcon from '../Cadconteudo/email_icon.png';
import passowdIcon from '../Cadconteudo/password_icon.png';

import './conteudo.css'
function Conteudo() {
    return (
        <>
            

            <div className="login-container">
  <img src={fotocadastro} alt="" className="user"/>
  <form action="#" method="post">
    <div className="input-group">
    <img src={emailIcon} alt="Email Icon" />
      <input type="text" name="email" placeholder="Nome" required/>
    </div>
    <div className="input-group">
    <img src={emailIcon} alt="Email Icon" />
        <input type="text" name="email" placeholder="Email" required/>
      </div>

      <div className="input-group">
      <img src={emailIcon} alt="Email Icon" />
        <input type="text" name="cpf" placeholder="CPF" required/>
      </div>

    <div className="input-group">
      <img src={passowdIcon}alt="Password Icon"/>
      <input type="password" name="password" placeholder="Numero de Registro" required/>
    </div>
    <div className="input-group">
        <img src={passowdIcon}alt="Password Icon"/>
        <input type="password" name="password" placeholder="Password" required/>
   
      </div>

<div className="input-group">
      <img src={passowdIcon}alt="Password Icon"/>
      <input type="password" name="password" placeholder="Confirmar Senha" required/>
 
    </div>



    <button type="submit" className="btn">Login</button>
  </form>
</div>
        </>
    )
}
export default Conteudo;