import { useState } from 'react'
import cabecalho from './cabeçalho/cabecalho'
import corpo from './corpo/corpo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <cabecalho></cabecalho>
    <corpo></corpo>
    <rodape></rodape>
    </>
  )
}

export default App
