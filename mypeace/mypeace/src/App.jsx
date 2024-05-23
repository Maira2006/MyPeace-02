import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/paginainicial'
import CadastroPaciente from './pages/cadastropaciente'
import CadastroPsicologo from './pages/cadastropsicologo'
import Login from './pages/login'
import PacienteHome from './pages/pacientehome'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact component={Home} /> 
        <Route path="/login" exact component={Login} /> 
        <Route path="/pacientehome" exact component={PacienteHome} /> 
        <Route path="/pacientecadastro" exact component={CadastroPaciente} /> 
        <Route path="/psicologocadastro" exact component={CadastroPsicologo} /> 
      </Routes>    
    </BrowserRouter>
  );
}

export default App;




