import { useState } from 'react'
import TopNav from './components/TopNav'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopNav/>
    <LandingPage/>
    <Footer/>
    </>
  )
}

export default App
