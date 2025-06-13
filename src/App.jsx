import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Dashboard from './pages/Dashboard'
import Categorias from './pages/Categorias'
import Pag403 from './pages/Pag403'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registro" element={<Registro/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/categorias" element={<Categorias/>} />
      <Route path="/403" element={<Pag403/>} />
    </Routes>
  )
}

export default App
