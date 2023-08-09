import { useState, useEffect } from 'react'
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Landing from './pages/LandingPage'
import Add from './pages/AddRecipe'
import UpdateRecipe from './pages/UpdateRecipe'
import Profile from './pages/Profile'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update-menu/:menuId' element={<UpdateRecipe/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
