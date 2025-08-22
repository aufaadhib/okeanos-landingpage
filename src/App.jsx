import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Scrollbars } from "react-custom-scrollbars-4";
import AboutSection from './components/AboutSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutSection/>
    </>
  )
}

export default App
