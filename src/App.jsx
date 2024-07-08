import { useState } from 'react'
import TopNav from './components/TopNav'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="" style={{background: "linear-gradient(180deg, #FCFCFC 0%, #EAEAEA 100%)"}}>

        <TopNav />
        <LandingPage />
        <Footer />
      </div>
    </>
  )
}

export default App
