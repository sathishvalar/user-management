import React from 'react'
import Home from './pages/Home/Home';
import About  from './pages/Users/About';
import Contact from './pages/Users/Contact';
import Login from './pages/Users/Login';
import Navbar from './Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer  from './Footer/Footer';
import { GlobalProvider } from './context/Globalstate';


const App = () => {
  return (
    <div>
      <GlobalProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        
      </Routes>
      </BrowserRouter>
      <Footer/>
      </GlobalProvider>
      
    </div>
  )
}

export default App