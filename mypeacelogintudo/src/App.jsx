import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import CadastroPsicologo from './Pages/CadastroPsicologo'


function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastroPsicologo" element={<CadastroPsicologo />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
