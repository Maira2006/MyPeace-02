import'./corpo.css'
import fotocadastro from '/assets/fotocadastro.png'
import email from '/assets/email_icon.png'
import password from '/assets/password_icon.png'

function Corpo(){
    return(
      <>
      <div className="login-container">
        <img src={fotocadastro} alt="" className="user"/>

        <form action="#" method="post">

          <div className="input-group">
            <img src={email}alt="Email Icon" />
            <input type="text" name="email" placeholder="Nome" required/>
          </div>

            <div className="input-group">
              <img src={email}alt="Email Icon"/>
              <input type="text" name="email" placeholder="Email" required/>
            </div>

            <div className="input-group">
              <img src={email}alt="Email Icon"/>
              <input type="text" name="cpf" placeholder="CPF" required/>
            </div>

            <div className="input-group">
              <img src={password}alt="Password Icon"/>
              <input type="password" name="password" placeholder="Senha" required/>
            </div>

            <div className="input-group">
                  <img src={password}alt="Password Icon"/>
                  <input type="password" name="password" placeholder="Confirmar Senha" required/>
            </div>

                <button type="submit" className="btn">Cadastrar Paciente</button>
        </form>
      </div>
     </>
    )
}

export default Corpo;