import'./corpo.css'

function corpo(){
    return(
      <>
            <div className="img_principal">
             <img src="img_tela_um.png" alt="Imagem Principal"></img> 
            </div>

            <div  className="centarl_funcao">
                <div  className='imgs_funcoes'>

                  <div  className='fotos_funcoes'>
                    <img src='chat.png'  alt="chat" />
                      <h1 className='nomes'>Interação entre<p>Psicólogo e Paciente</p> </h1>
                  </div>

                  <div  className='fotos_funcoes'>
                    <img src='pessoa.png'  alt="pessoa" />
                      <h1 className='nomes'>Respiração Guiada </h1>
                  </div>

                  <div  className='fotos_funcoes'>
                    <img src='caderno.png'  alt="caderno" />
                      <h1 className='nomes'>Diário de emoções</h1>
                  </div>

                </div>
            </div>

         
      </>
    )
}

export default corpo;