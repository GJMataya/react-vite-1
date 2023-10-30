import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <HeroSection/>
    </div>
  )
}

export default App
