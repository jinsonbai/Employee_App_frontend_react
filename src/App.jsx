import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Employeeform from './components/Employeeform'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Main child={<Home/>}/>}></Route>
      <Route path='/employeeform' element={<Main child={<Employeeform/>}/>}></Route>
    </Routes>
    </>
  )
}

export default App
