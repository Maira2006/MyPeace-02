import React, { useState } from 'react';
import './corpo.css';
import fotocadastro from './fotocadastro.png';
import emailIcon from './email_icon.png';
import passwordIcon from './password_icon.png';
import axios from 'axios';

function Corpo() {
  const [mensagem, setMensagem] = useState('');

  function cadastrar(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const id = document.querySelector('#id').value;

    axios.post('https://api-mypeace.vercel.app/register/pacient/274774387474', 
    {
      name: nome,
      email: email,
      idPsychologist: id,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        'Authorization': 'Bearer 347587378578435783453rwerwfsdfsdfwe',
      },
    })
    .then(resp => {  
      console.log(resp);
      setMensagem('Paciente cadastrado com sucesso!');
    })
    .catch(error => {
      console.error(error);
      if (error.response) {
        setMensagem(error.response.data.msg);
      } else {
        setMensagem('Erro ao cadastrar paciente. Por favor, tente novamente mais tarde.');
      }
    });
  }

  return (
    <>
      <div className="login-container">
        <img src={fotocadastro} alt="Cadastro" className="user" />

        <form action="#" method="post" onSubmit={cadastrar}>
          <div className="input-group">
            <img src={emailIcon} alt="Email Icon" />
            <input type="text" id="nome" name="nome" placeholder="Nome" required />
          </div>

          <div className="input-group">
            <img src={emailIcon} alt="Email Icon" />
            <input type="text" id="email" name="email" placeholder="Email" required />
          </div>

          <div className="input-group">
            <img src={emailIcon} alt="Email Icon" />
            <input type="text" id="id" name="id" placeholder="Id" required />
          </div>

          <div className="input-group">
            <img src={passwordIcon} alt="Password Icon" />
            <input type="password" id="senha" name="password" placeholder="Senha" required />
          </div>

          <div className="input-group">
            <img src={passwordIcon} alt="Password Icon" />
            <input type="password" name="confirmPassword" placeholder="Confirmar Senha" required />
          </div>

          <button type="submit" className='btn'>Cadastrar Paciente</button>
          <p>{mensagem}</p>
        </form>
      </div>
    </>
  );
}

export default Corpo;
