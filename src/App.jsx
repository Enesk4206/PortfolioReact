import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Project from "./pages/Project"

const App = () => {
  return (
    <div className='min-h-screen bg-slate-900 text-white'>
    
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App