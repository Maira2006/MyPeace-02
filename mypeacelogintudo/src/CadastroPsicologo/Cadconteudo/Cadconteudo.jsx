import './Cadconteudo.css'
function Cadconteudo() {
    return (
        <>
            

            <div className="login-container">
  <img src="image 10.png" alt="" className="user"/>
  <form action="#" method="post">
    <div className="input-group">
      <img src="email_icon.png" alt="Email Icon" />
      <input type="text" name="email" placeholder="Nome" required/>
    </div>
    <div className="input-group">
        <img src="email_icon.png" alt="Email Icon"/>
        <input type="text" name="email" placeholder="Email" required/>
      </div>

      <div className="input-group">
        <img src="email_icon.png" alt="Email Icon"/>
        <input type="text" name="cpf" placeholder="CPF" required/>
      </div>

    <div className="input-group">
      <img src="password_icon.png" alt="Password Icon"/>
      <input type="password" name="password" placeholder="Numero de Registro" required/>
    </div>
    <div className="input-group">
        <img src="password_icon.png" alt="Password Icon"/>
        <input type="password" name="password" placeholder="Password" required/>
   
      </div>

<div className="input-group">
      <img src="password_icon.png" alt="Password Icon"/>
      <input type="password" name="password" placeholder="Confirmar Senha" required/>
 
    </div>



    <button type="submit" className="btn">Login</button>
  </form>
</div>
        </>
    )
}
export default Cadconteudo