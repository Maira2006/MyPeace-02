import './Conteudo.css'
function Conteudo() {
    return (
        <>
            <div className="login-container">
                <img src="image 10.png" alt="" className="user"/> 
                <form action="#" method="post" >
                <div className="input-group">
                <img src="email_icon.png" alt="Email Icon" />
                    <input type="email" name="email" placeholder="Email" required />
                </div>
            

            <div class="input-group">
       <img src="password_icon.png" alt="Password Icon"/> 
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