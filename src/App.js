import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'
function App() {
 
  return (
    <>
     <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home />}></Route>
   <Route path="/about" element={<About />}></Route> 
   <Route path="/contact" element={<Contact />}></Route>
   <Route path="/services" element={<Services />}></Route>
   <Route path='/login'  element={<Login/>}></Route>
    </Routes>
    <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
