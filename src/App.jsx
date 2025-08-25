import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Research from './Components/Research'
import Signup from './Components/Signup'
import Login from './Components/Login'
import PressReleases from './Components/PressRelease'
import ContactSection from './Components/Contact'
import Hr from './Components/Hr'

function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/research' element={<Research/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/pressrelease' element={<PressReleases/>}/>
        <Route path='/contact' element={<ContactSection/>}/>
        <Route path='/hr' element={<Hr/>}/>

        

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
