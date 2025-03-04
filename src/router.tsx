import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../src/pages/home/Home'
import Register from '../src/pages/register/Register'
import System from './pages/system/System'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<System />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas