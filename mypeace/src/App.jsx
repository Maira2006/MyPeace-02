import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Home from './pages/paginainicial';
import CadastroPaciente from './pages/cadastropaciente';
import CadastroPsicologo from './pages/cadastropsicologo';
import Login from './pages/login';
import PacienteHome from './pages/pacientehome';
import Diario from './pages/diario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/CadastroPsicologo' element={<CadastroPsicologo />} />
        <Route path='/PacienteHome' element={<PacienteHome />} />
        <Route path='/CadastroPaciente' element={<CadastroPaciente />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Diario' element={<Diario />} />
        <Route path='/diario/:day' element={<Diario />} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;



