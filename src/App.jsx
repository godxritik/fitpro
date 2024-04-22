import React , {useState} from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Hero/Hero'
import Dashboard from './components/Dashboard/Dashboard'
import Standard from './components/PriceCards/Standard'
import Pricing from './components/Pricing/Pricing'
import News from "./components/News/News"
import BMICalculator from './components/BmiCalculator/BmiCalculator'
import AppDownload from './components/AppDownload/AppDownload'
import Clock from './components/Clock/Clock'
import About from './components/About/About'
import Trainer from "./components/Trainers/Trainer";



function App(){

  return (
    <div className='scrollbar-hide'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About/>} />
          <Route path="/news" element={<News/>} />
        </Routes>
      </BrowserRouter>

           
          <Dashboard/>
      
    
          <About/>
      

      
          <Trainer />

    </div>
  )
}

export default App
