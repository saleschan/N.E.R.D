import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route component={<Login />} path="/" exact />
        <Route component={<Home />} path="./pages/Home" />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}
