import React from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { Footer } from './Footer'
import { InfoPage } from './InfoPage'
import { Init } from './Init'
import { NavBar } from './NavBar'
import { Products } from './Products'
import { Services } from './Services'
import { Visit } from './Visit'

export const MainPage = () => {
  return (
   <>
    <div className='nav-bar'> <h1>Capsicum & Especias</h1> </div>
    
    <NavBar></NavBar>

     <Routes>
      <Route path='/' element={<Init/>}/>
      <Route path='/info' element={<InfoPage/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/visit' element={<Visit/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>

    </Routes>

    <Footer/>

     
    </>
)}
