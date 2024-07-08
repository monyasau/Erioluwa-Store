import { useState } from 'react'
import TopNav from './components/TopNav'
import LandingPage from './components/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopNav/>
    <LandingPage/>
    </>
  )
}

export default App
