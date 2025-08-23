import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Scrollbars } from "react-custom-scrollbars-4";
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import { VideoSection } from './components/VideoSection';
import ServicesSection from './components/ServicesSection';
import DevisionSection from './components/DevisionSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className='relative bg-gradient-to-l from-accent/20 via-accent/5 to-white'>
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
        <AboutSection/>
        <PortfolioSection/>
      </div>
      <ServicesSection/>
      <DevisionSection/>
      <VideoSection/>
    </>
  )
}

export default App
